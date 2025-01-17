import { appTools, defineConfig } from "@modern-js/app-tools";
import { moduleFederationPlugin } from "@module-federation/modern-js";
import { withZephyr } from "zephyr-modernjs-plugin";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  output: {
    distPath: {
      html: "./",
    },
  },
  html: {
    outputStructure: "flat",
  },
  source: {
    mainEntryName: "index",
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: "rspack", // Set to 'webpack' to enable webpack
    }),
    moduleFederationPlugin(),
    withZephyr(),
  ],
});
