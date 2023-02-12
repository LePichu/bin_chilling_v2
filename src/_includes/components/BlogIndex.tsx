import { format } from "https://deno.land/std@0.176.0/datetime/format.ts"

interface Post {
	name: string
	updated: Date
	written: Date
}

function getBlogPostsDir() {
	const posts: Array<Post> = []
	for (const post of Deno.readDirSync(`${Deno.cwd()}/src/blog/`)) {
		if (post.isFile) {
			posts.push({
				name: post.name,
				updated: Deno.lstatSync(`${Deno.cwd()}/src/blog/${post.name}`)
					.mtime ?? new Date(0),
				written: Deno.lstatSync(`${Deno.cwd()}/src/blog/${post.name}`)
					.birthtime ?? new Date(0),
			})
		}
	}

	const final = posts.filter((x) =>
		~["index.mdx", "whatsiscatwant.mdx", "test.mdx"].indexOf(x.name) > -1
	)

	return final.sort((a, b) => b.written.getTime() - a.written.getTime())
}

function fmtPostName(name: string) {
	return name.replace(".mdx", "").split("-").map((x) =>
		x[0].toUpperCase() + x.slice(1)
	).join(" ")
}

export default function BlogIndex() {
	return (
		<>
			<ul id="blog-index">
				{getBlogPostsDir().map((post) => (
					<li>
						<a href={`/blog/${post.name.replace(".mdx", "")}`}>
							<h1>{fmtPostName(post.name)}</h1>
						</a>

						<hr />

						<h3>
							<span class="material-icons">post_add</span>
							Written on: {format(post.written, "dd/MM/yyyy")}
						</h3>

						<h3>
							<span class="material-icons">update</span>
							Updated on: {format(post.updated, "dd/MM/yyyy")}
						</h3>
					</li>
				))}
			</ul>
		</>
	)
}
