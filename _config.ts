import lume from "lume/mod.ts"
import jsx from "lume/plugins/jsx.ts"
import mdx from "lume/plugins/mdx.ts"
import shiki from "./plugins/shiki/mod.ts"
import HeadingsSlug from "npm:rehype-slug"
import AutolinksHeadings from "npm:rehype-autolink-headings"
import tailwindcss from "lume/plugins/tailwindcss.ts"
import sitemap from "lume/plugins/sitemap.ts"

const site = lume({
	src: "./src",
	server: {
		page404: "/404/index.html",
	},
})

const plugins = [
	jsx(),
	mdx({
		rehypePlugins: [HeadingsSlug, AutolinksHeadings],
	}),
	shiki(),
	tailwindcss(),
	sitemap(),
]

plugins.forEach((plugin) => site.use(plugin))
site.add([".css"]);

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
