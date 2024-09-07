import lume from "lume/mod.ts"
import jsx_preact from "lume/plugins/jsx_preact.ts"
import mdx from "lume/plugins/mdx.ts"
// import esbuild from "lume/plugins/esbuild.ts"
// import codeHighlight from "lume/plugins/code_highlight.ts"
// import prism from "lume/plugins/prism.ts"
import shiki from "./plugins/shiki/mod.ts"
import HeadingsSlug from "npm:rehype-slug"
import AutolinksHeadings from "npm:rehype-autolink-headings"
import tailwindcss from "lume/plugins/tailwindcss.ts"
import postcss from "lume/plugins/postcss.ts"
import sitemap from "lume/plugins/sitemap.ts"

const site = lume({
	src: "./src",
	server: {
		page404: "/404/index.html",
	},
})

const plugins = [
	jsx_preact(),
	mdx({
		rehypePlugins: [HeadingsSlug, AutolinksHeadings],
		// components: {
		// 	a: ({ ...props }) => {
		// 		if (props.tabIndex == "-1") {
		// 			props.target = "_self"
		// 		} else {
		// 			props.target = "_blank"
		// 		}

		// 		return h("a", {
		// 			...props,
		// 			className: "text-blue-500 hover:underline",
		// 		})
		// 	},
		// },
	}),
	// esbuild(),
	// codeHighlight(),
	// prism(),
	shiki(),
	tailwindcss({
		extensions: [".html", ".tsx"],
		// @ts-ignore false error
		options: {
			corePlugins: {
				preflight: false,
			},
		},
	}),
	postcss(),
	sitemap(),
]

plugins.forEach((plugin) => site.use(plugin))

site.process([".mdx"], (pages) => {
	pages.forEach((page) => {
		if (page.src.path.startsWith("/blog/")) {
			page.document?.body?.querySelectorAll("a").forEach(
				(el) => {
					if (
						// @ts-ignore ""
						el.getAttribute("tabindex") == "-1" ||
						["/", "/blog", "/portfolio", "#blog-footer"].includes(
							// @ts-ignore ""
							el.getAttribute("href"),
						)
					) { // @ts-ignore ""
						el.setAttribute("target", "_self")
					} else {
						// @ts-ignore ""
						el.setAttribute("target", "_blank")
					}
				},
			)
		}
	})
})

site.copy("assets")
site.copy("server.ts")
site.copy("index.js")
site.copy("google960bff13302df6ac.html")

export default site
