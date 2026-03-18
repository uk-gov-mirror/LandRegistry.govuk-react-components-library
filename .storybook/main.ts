// .storybook/main.ts
import { createRequire } from "node:module";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-webpack5";
import type { Indexer } from "storybook/internal/types";
import { loadCsf } from "storybook/internal/csf-tools";
import { serverRequire } from "storybook/internal/common";
import sass from "sass";
import { compile } from "./compile.ts";
import { vite, webpack, STORIES_REGEX } from "./unplugin.ts";

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

const dynamicIndexer: Indexer = {
  test: STORIES_REGEX,
  createIndex: async (fileName, options) => {
    console.log("indexing", fileName);
    delete require.cache[fileName];
    const config = await serverRequire(fileName);
    const compiled = await compile(config);
    return loadCsf(compiled, { ...options, fileName }).parse().indexInputs;
  },
};

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  experimental_indexers: async (existing) => [dynamicIndexer, ...existing],

  // no presets: [] needed anymore

  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              { loader: "sass-loader", options: { implementation: sass } },
            ],
          },
        ],
      },
    },
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = [...(config.plugins ?? []), vite({})];
    return config;
  },
  webpackFinal: async (config) => {
    config.plugins = [...(config.plugins ?? []), webpack({})];
    config.resolve.fallback = { assert: require.resolve("assert/") };
    config.devServer = {
      ...config.devServer,
      setupMiddlewares: (middlewares, devServer) => {
        devServer.app.use((req, res, next) => {
          if (req.url?.endsWith(".mjs")) {
            res.setHeader("Content-Type", "text/javascript");
            res.setHeader("X-Content-Type-Options", "nosniff");
          }
          next();
        });
        return middlewares;
      },
      static: { ...config.devServer?.static, serveIndex: true, watch: true },
      headers: {
        ...config.devServer?.headers,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    };
    return config;
  },
  docs: {},
  typescript: { reactDocgen: "react-docgen-typescript" },
  staticDirs: ["./public"],
};

export default config;
