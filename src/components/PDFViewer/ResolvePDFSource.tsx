import { SourceDeterminer } from "./PDFViewer.types";

/**
 * Convert a base64 string to an ArrayBuffer
 */
export const _base64ToArrayBuffer = (base64: string): ArrayBuffer => {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
};

/**
 * Very small heuristic to detect a plain base64 string
 */
export const isBase64 = (value: string): boolean =>
  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(
    value,
  );

/**
 * ResolvePDFSource
 *
 * Accepts a source that may be:
 *  - a plain base64 string (PDF binary encoded as base64)
 *  - a data: URL containing base64 (data:application/pdf;base64,...)
 *  - an existing blob: URL (blob:...)
 *  - a Blob/File object
 *  - a regular URL string (http(s) or same-origin path)
 *
 * Returns a SourceDeterminer:
 *  - { isBase64Source: true, source: string } when an object URL was created
 *  - { isBase64Source: false, source: string } when source can be used directly
 *
 * If an object URL is created, callers should revoke it when no longer needed:
 *  `URL.revokeObjectURL(source)`
 */
export const ResolvePDFSource = (
  source?: string | Blob | null,
): SourceDeterminer => {
  // Nothing provided
  if (source === undefined || source === null || source === "") {
    return { isBase64Source: false, source: "" };
  }

  // If source is already a Blob (File), create an object URL
  if (
    typeof (source as Blob).arrayBuffer === "function" ||
    source instanceof Blob
  ) {
    const blob = source as Blob;
    const objectUrl = URL.createObjectURL(blob);
    return { isBase64Source: true, source: objectUrl };
  }

  // If source is a string:
  if (typeof source === "string") {
    // If it's already a blob URL, return as-is
    if (source.startsWith("blob:")) {
      return { isBase64Source: false, source };
    }

    // If it's a data URL (data:application/pdf;base64,....)
    if (source.startsWith("data:")) {
      // data:[<mediatype>][;base64],<data>
      const commaIndex = source.indexOf(",");
      if (commaIndex > -1) {
        const meta = source.substring(0, commaIndex);
        const dataPart = source.substring(commaIndex + 1);
        // If it contains base64 marker, decode accordingly
        if (meta.indexOf(";base64") !== -1) {
          try {
            const arrayBuffer = _base64ToArrayBuffer(dataPart);
            const blob = new Blob([arrayBuffer], { type: "application/pdf" });
            const objectUrl = URL.createObjectURL(blob);
            return { isBase64Source: true, source: objectUrl };
          } catch (err) {
            console.error(
              "ResolvePDFSource: failed to convert data: URL to blob",
              err,
            );
            // fallback to returning original data URL
            return { isBase64Source: false, source };
          }
        } else {
          // Not base64-encoded data URL — return as is
          return { isBase64Source: false, source };
        }
      }
    }

    // If it's a plain base64 string (no data: prefix), convert
    if (isBase64(source)) {
      try {
        const arrayBuffer = _base64ToArrayBuffer(source);
        const blob = new Blob([arrayBuffer], { type: "application/pdf" });
        const objectUrl = URL.createObjectURL(blob);
        return { isBase64Source: true, source: objectUrl };
      } catch (err) {
        console.error(
          "ResolvePDFSource: failed to convert base64 to blob",
          err,
        );
        return { isBase64Source: false, source };
      }
    }

    // Otherwise treat as a normal URL (http(s) or same-origin path)
    return { isBase64Source: false, source };
  }

  // Fallback: convert to string
  try {
    const asString = String(source);
    return { isBase64Source: false, source: asString };
  } catch (err) {
    console.error("ResolvePDFSource: failed to convert source to string", err);
    return { isBase64Source: false, source: "" };
  }
};
