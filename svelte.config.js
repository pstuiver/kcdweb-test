import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ pages: "build", assets: "build" }),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/kcdweb-test" : ""
		}
	}
};

export default config;
