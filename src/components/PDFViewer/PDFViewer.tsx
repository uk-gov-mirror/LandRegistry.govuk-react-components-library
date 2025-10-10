import React, { useEffect, useState, useRef } from "react";
import { PDFJsProps, PDFViewerProps } from "./PDFViewer.types";
import { Loading } from "../Loading";
import { Slugify } from "./Slugify";
import { ResolvePDFSource } from "./ResolvePDFSource";

const PDFViewer: React.FC<PDFViewerProps> = (props) => {
  const viewerRef = React.useRef<HTMLDivElement | null>(null);

  const {
    iframeId,
    src,
    viewerLocation,
    documentName,
    documentNameColour,
    backend,
    toolbar = "minimal",
    additionalBackendAttributes,
    // optional: lets callers skip client-side fetch for remote resources
    disableClientFetch = false,
    ...attributes
  } = props;

  const [loading, setLoading] = useState<boolean>(false);

  // ref for object URL (either created by ResolvePDFSource or by us after fetching)
  const objectUrlRef = useRef<string | null>(null);
  // did ResolvePDFSource create the object URL? (helps understanding where to revoke)
  const createdByResolveRef = useRef<boolean>(false);
  // fetch abort controller for cross-origin remote fetches
  const fetchControllerRef = useRef<AbortController | null>(null);

  const isRemoteUrl = (url?: string | null) => {
    if (!url) return false;
    // Check if it's an HTTP(S) URL
    return /^https?:\/\//i.test(url);
  };

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    const element = viewerRef.current;
    if (!element) {
      setLoading(false);
      return;
    }

    // cleanup previous URL/fetch if any
    if (fetchControllerRef.current) {
      try {
        fetchControllerRef.current.abort();
      } catch (err) {
        console.error("PDFViewer: fetch abort error:", err);
        /* ignore */
      }
      fetchControllerRef.current = null;
    }
    if (objectUrlRef.current) {
      try {
        URL.revokeObjectURL(objectUrlRef.current);
      } catch (err) {
        console.error("PDFViewer: revokeObjectURL error:", err);
      }
      objectUrlRef.current = null;
      createdByResolveRef.current = false;
    }

    const init = async () => {
      let sourceToUse: string | undefined = src;

      // 1) Let ResolvePDFSource handle base64/data/blob inputs synchronously.
      try {
        const resolved = ResolvePDFSource(src as any);
        if (resolved && resolved.source) {
          sourceToUse = resolved.source;
          if (resolved.isBase64Source) {
            // ResolvePDFSource created an object URL for us (data/blob/base64)
            objectUrlRef.current = resolved.source;
            createdByResolveRef.current = true;
          }
        }
      } catch (err) {
        // If ResolvePDFSource throws, just ignore and fall back to src
        console.error("PDFViewer: ResolvePDFSource error:", err);
      }

      // 2) If ResolvePDFSource didn't create an object URL and the src is cross-origin HTTP(S),
      //    attempt a client-side fetch to create an object URL (so viewer can load it safely).
      if (
        !objectUrlRef.current &&
        !disableClientFetch &&
        typeof src === "string" &&
        /^https?:\/\//i.test(src) &&
        isRemoteUrl(src)
      ) {
        const controller = new AbortController();
        fetchControllerRef.current = controller;
        try {
          const resp = await fetch(src as string, {
            signal: controller.signal,
            credentials: "omit",
          });
          if (!resp.ok) {
            console.warn(
              `PDFViewer: fetch returned ${resp.status} ${resp.statusText} for ${src}`,
            );
            // fallback: keep using original src
          } else {
            const blob = await resp.blob();
            if (blob && blob.size > 0) {
              const obj = URL.createObjectURL(blob);
              objectUrlRef.current = obj;
              createdByResolveRef.current = false; // we created it via fetch
              sourceToUse = obj;
            } else {
              console.warn(
                "PDFViewer: fetched blob is empty - falling back to original src",
              );
            }
          }
        } catch (err: any) {
          if (err?.name === "AbortError") {
            // aborted, nothing to do
            if (!mounted) return;
          } else {
            console.error("PDFViewer: error fetching cross-origin PDF:", err);
          }
          // fallback to source as-is (original remote URL)
        }
      }

      // 3) Prepare and call backend
      if (!mounted) return;
      const jsProps: PDFJsProps = {
        iframeId,
        source: sourceToUse,
        viewerLocation,
        documentName,
        documentNameColour,
        element,
        toolbar,
        ...additionalBackendAttributes,
      };

      try {
        backend(jsProps);
      } catch (err) {
        console.error("PDFViewer: backend threw an error:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }; // end init

    init();

    return () => {
      mounted = false;
      // cancel any ongoing fetch
      if (fetchControllerRef.current) {
        try {
          fetchControllerRef.current.abort();
        } catch (err) {
          console.error("PDFViewer: fetch abort error during cleanup:", err);
        }
        fetchControllerRef.current = null;
      }
      // revoke any object URL we created
      if (objectUrlRef.current) {
        try {
          URL.revokeObjectURL(objectUrlRef.current);
        } catch (err) {
          console.error("PDFViewer: fetch abort error during cleanup:", err);
        }
        objectUrlRef.current = null;
        createdByResolveRef.current = false;
      }
      // Note: PDFViewerBackend also attaches an iframe to the element. If backend does not
      // remove previous iframes, you might want to clear element.children here.
    };
    // re-run when these inputs change
  }, [
    src,
    iframeId,
    viewerLocation,
    documentName,
    documentNameColour,
    toolbar,
    backend,
    disableClientFetch,
  ]);

  return (
    <>
      {loading && <Loading message={"Loading PDF Document"} />}
      <div
        ref={viewerRef}
        id={`viewer ${documentName ? Slugify(documentName) : ""}`}
        data-testid={`viewer ${documentName ? Slugify(documentName) : ""}`}
        style={{ width: "100%", height: "100%" }}
        {...attributes}
      />
    </>
  );
};

export default PDFViewer;
