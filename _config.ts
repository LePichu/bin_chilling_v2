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
})

const plugins = [
	jsx_preact(),
	mdx({
		rehypePlugins: [HeadingsSlug, AutolinksHeadings],
	}),
	esbuild(),
	codeHighlight(),
	tailwindcss({
		extensions: [".html", ".tsx"],
	}),
	postcss(),
]

plugins.forEach((plugin) => site.use(plugin))

site.copy("assets")
site.copy("server.ts")

export default site
