import { createExtractor, Format, Parser } from "std/front_matter/mod.ts"
import { parse } from "std/yaml/mod.ts"
import { Data } from "../_includes/Types.ts"

interface PostData extends Data {
    js_time: Date
	file_path: string
}

const layout = "main.tsx",
	meta = {
		title: "LePichu | Blog",
		description: "Ayo, I write cool things too!",
	}

export { layout, meta }

export default function () {
    const posts = Deno.readDirSync("./src/blog/")
    const extractor = createExtractor({ [Format.YAML]: parse as Parser })

	const postsData: PostData[] = []

    function parseStringToDate(date: string) {
        const months = [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ]

        let [day, month, year] = date.split(" ")
        month = (months.indexOf(month) + 1).toString()
        month.length === 1 ? month = `0${month}` : month
        day = day.replace(/(st|nd|rd|th)/, "")
        day.length === 1 ? day = `0${day}` : day

        return new Date(`${year}-${month}-${day}`)
    }

	for (const post of posts) {
		if (post.isFile && post.name.endsWith(".mdx")) {
			const path = Deno.readTextFileSync(`./src/blog/${post.name}`)
			const { attrs } = extractor<PostData>(path)

            attrs["js_time"] = new Date()
            attrs["file_path"] = `/blog/${post.name.replace(".mdx", "")}`
			postsData.push(attrs)
		}
	}

    const private_posts: Array<string> = [
        "codm-br-identity-crisis",
        "crystal-review",
		"framework-modernity",
		"making-wasmtime-deno",
		"objective-shell-comparison",
		"sniper-challenge-cheatcode"
    ]

    private_posts.forEach((post) => {
        const index = postsData.findIndex((p) => p.file_path.includes(post))
        postsData.splice(index, 1)
    })

    postsData.sort((a, b) => {
        return b.js_time.getTime() - a.js_time.getTime()
    })

	return (
		<>
			<section class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
				{postsData.map((post) => {
					return (
						<div class="flex flex-col gap-4 p-6 rounded-2xl border-solid border-gray-400 border-2">
							<img
								src={post.meta.image}
								class="rounded-xl h-auto w-full"
							/>
							<a
								class="m-0 text-3xl font-bold no-underline text-black visited:text-black hover:underline"
								href={post.file_path}
							>
								{post.meta.title}
							</a>
							<p class="m-0">{post.meta.description}</p>
						</div>
					)
				})}
			</section>
		</>
	)
}
