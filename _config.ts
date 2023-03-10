import lume from "lume/mod.ts"
import jsx_preact from "lume/plugins/jsx_preact.ts"
import mdx from "lume/plugins/mdx.ts"
import esbuild from "lume/plugins/esbuild.ts"
import sass from "lume/plugins/sass.ts"
import codeHighlight from "lume/plugins/code_highlight.ts"
import HeadingsSlug from "npm:rehype-slug"
import AutolinksHeadings from "npm:rehype-autolink-headings"

const site = lume({
	src: "./src",
})

const plugins = [
	jsx_preact(),
	mdx({
		rehypePlugins: [HeadingsSlug, AutolinksHeadings],
	}),
	esbuild(),
	sass(),
	codeHighlight(),
]

plugins.forEach((plugin) => site.use(plugin))

site.copy("assets")
site.copy("server.ts")

export default site
