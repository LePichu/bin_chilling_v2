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
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
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

			attrs["js_time"] = parseStringToDate(attrs["publish"])
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
		"sniper-challenge-cheatcode",
		"swiss-army-knife-dev-phone",
		"clis-as-blueprints",
		"solid-jsx-in-vue",
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
			<section class="grid grid-cols-1 md:grid-cols-[22%_78%] grow justify-start items-start pb-8 md:px-32">
				<section class="flex flex-col gap-4 p-4">
					<input
						type="search"
						placeholder="Search for Blog Posts!"
						class="p-4 pl-12 h-fit border-solid border-gray-400 outline-none focus:outline-none focus:shadow-xl shadow-black border border-box flex-grow transition-all"
						id="blog-search"
					/>
					<div class="flex flex-col gap-4" id="featured">
						<hr class="border-solid border-gray-300 border w-[25%] my-1" />
						<h1 class="text-xl font-bold m-0 -mt-2 text-center">
							Featured Posts
						</h1>
						{postsData.map((post) => {
							if (post.featured === true) {
								return (
									<a
										class="flex flex-col gap-4 p-6 border-solid border-gray-400 border hover:shadow-xl shadow-black transition-all no-underline text-black blog-post group"
										href={post.file_path}
									>
										<img
											src={post.meta.image}
											class="rounded-xl h-autol"
										/>
										<h1
											class="m-0 text-lg font-bold no-underline group-hover:underline"
											href={post.file_path}
										>
											{post.meta.title}
										</h1>
										<p class="m-0 text-sm">
											{post.meta.description}
										</p>
										<hr class="border-solid border-gray-300 border w-[25%] my-1" />
										<section class="flex flex-row flex-wrap gap-2">
											{post.tags?.map((tag) => {
												return (
													<span class="rounded-lg bg-gray-200 text-gray-700 uppercase text-xs py-1 px-3">
														{tag}
													</span>
												)
											})}
										</section>
									</a>
								)
							}
						})}
					</div>
				</section>

				<hr class="md:hidden block border-solid border-gray-300 border w-[50%] my-4" />

				<section
					class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
					id="blog-grid"
				>
					{postsData.map((post) => {
						return (
							<a
								class="flex flex-col gap-4 p-6 border-solid border-gray-400 border hover:shadow-2xl md:hover:scale-[1.025] shadow-black transition-all no-underline text-black visited:text-black blog-post group"
								href={post.file_path}
							>
								<img
									src={post.meta.image}
									class="rounded-xl h-auto pointer-events-none"
								/>
								<h1
									class="m-0 text-3xl font-bold no-underline group-hover:underline pointer-events-none"
									href={post.file_path}
								>
									{post.meta.title}
								</h1>
								<p class="m-0 pointer-events-none">
									{post.meta.description}
								</p>
								<hr class="border-solid border-gray-300 border w-[25%] my-1 pointer-events-none" />
								<section class="flex flex-row flex-wrap gap-2 pointer-events-none">
									{post.tags?.map((tag) => {
										return (
											<span class="rounded-lg bg-gray-200 text-gray-700 uppercase text-xs py-1 px-3">
												{tag}
											</span>
										)
									})}
								</section>
							</a>
						)
					})}
				</section>
			</section>
		</>
	)
}
