import type { StorybookConfig } from "@storybook/react-webpack5";
import sass from "sass";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          // Replaces any existing Sass rules with given rules
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "sass-loader",
                options: { implementation: sass },
              },
            ],
          },
        ],
      },
    },
    "./preset",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  staticDirs: ["./public"],
  webpackFinal: async (config) => {
    config.resolve.fallback = {
      assert: require.resolve("assert/"),
    };

    // Configure dev server to serve .mjs files with correct MIME type
    config.devServer = {
      ...config.devServer,
      setupMiddlewares: (middlewares, devServer) => {
        // Add middleware to set correct MIME type for .mjs files
        devServer.app.use((req, res, next) => {
          if (req.url && req.url.endsWith(".mjs")) {
            res.setHeader("Content-Type", "text/javascript");
            res.setHeader("X-Content-Type-Options", "nosniff");
          }
          next();
        });

        return middlewares;
      },
      // Configure static file serving with proper headers
      static: {
        ...config.devServer?.static,
        serveIndex: true,
        watch: true,
      },
      // Add headers for all responses
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
};
export default config;
