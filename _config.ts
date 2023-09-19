import lume from "lume/mod.ts"
import jsx_preact from "lume/plugins/jsx_preact.ts"
import mdx from "lume/plugins/mdx.ts"
import esbuild from "lume/plugins/esbuild.ts"
import codeHighlight from "lume/plugins/code_highlight.ts"
import HeadingsSlug from "npm:rehype-slug"
import AutolinksHeadings from "npm:rehype-autolink-headings"
import tailwindcss from "lume/plugins/tailwindcss.ts"
import postcss from "lume/plugins/postcss.ts"

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
	esbuild(),
	codeHighlight(),
	tailwindcss({
		extensions: [".html", ".tsx"],
	}),
	postcss(),
]

plugins.forEach((plugin) => site.use(plugin))

site.process([".mdx"], (page) => {
	if (page.src.path.startsWith("/blog/")) {
		page.document?.body?.querySelectorAll("a").forEach(
			(el) => {
				if (
					// @ts-ignore ""
					el.getAttribute("tabindex") == "-1"
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

site.copy("assets")
site.copy("server.ts")
export default site
