import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({ pages: "build", assets: "build" }),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/kcdweb-test" : ""
		},
		output: {
			bundleStrategy: "single"
		}
	}
};

export default config;
