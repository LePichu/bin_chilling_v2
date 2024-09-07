import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import { AuthorInfo, Data as Props } from "./Types.ts"

const Meta = (props: Props) => {
	const title =
		`${props.blog ? "LePichu's Blog | " : ""}` + props.meta.title ??
			"LePichu | Website"
	const description = props.meta.description ?? "LePichu | Website"
	const theme = props.meta.theme ?? "#F6BF00"
	const URL = props.meta.url ?? `https://lepichudoes.deno.dev`
	const image = props.meta.image
		? (`${URL}${props.meta.image}`)
		: `https://lepichudoes.deno.dev/assets/icon.png`

	return (
		<>
			<meta charSet="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta
				name="google-site-verification"
				content="XYxYdtAO4Y4tqtOuy-pj8D9zCIUh1c8FfN6Sy-JTcbE"
			/>

			<link rel="stylesheet" href="/index.css" />
			<link rel="icon" href="/assets/icon.png" />
			{props.meta.url !== undefined
				? <link rel="canonical" href={URL} />
				: <></>}
			<script src="/index.js" defer={true} type="module"></script>

			<title>
				{title}
			</title>

			<meta
				name="description"
				content={description}
			/>

			<meta property="og:url" content={URL} />
			<meta property="og:type" content="website" />
			<meta
				property="og:title"
				content={title}
			/>
			<meta
				property="og:description"
				content={description}
			/>
			<meta property="og:image" content={image} />

			<meta name="theme-color" content={theme} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="lepichudoes.deno.dev" />
			<meta property="twitter:url" content={URL} />
			<meta
				name="twitter:title"
				content={title}
			/>
			<meta
				name="twitter:description"
				content={description}
			/>
			<meta
				name="twitter:image"
				content={image}
			/>
		</>
	)
}

function Stitch(props: {
	icon: string
	text: string
}) {
	return (
		<div class="flex gap-2 items-center">
			<img src={props.icon} class="w-6 h-6" />
			<p class="m-0 blog-details-text text-xl">{props.text}</p>
		</div>
	)
}

const BlogDetail = (props: Props) => (
	<>
		<section class="flex flex-col gap-4">
			<h1 class="text-3xl md:text-4xl font-bold m-0">
				{props.meta.title}
			</h1>
			<img class="rounded-3xl w-[90%] m-auto" src={props.meta.image} />
			<section class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 py-4 md:px-8 mb-2">
				{Object.entries({
					"publish": props.publish,
					"time": props.time,
					"authors": (new Intl.ListFormat("en", {
						style: "short",
						type: "conjunction",
					}).format(props.authors)),
				}).map(([k, v]) => {
					return (
						<Stitch
							icon={`/assets/blog_post_icons/${k}.png`}
							text={v}
						/>
					)
				})}
				<div class="flex gap-2 items-center">
					<img
						src="/assets/blog_post_icons/cup.png"
						class="w-6 h-6"
					/>
					<p class="m-0 blog-details-text text-xl hover:underline underline-offset-4">
						<a
							class="no-underline text-black visited:text-black"
							href="#blog-footer"
						>
							Buy me a Coffee!
						</a>
					</p>
				</div>
			</section>
			<hr class="m-0 mb-4" />
		</section>
	</>
)

const BlogConcluder = (props: Props) => (
	<>
		<section class="flex flex-col gap-4 my-8" id="blog-footer">
			<hr class="m-0 mb-4" />

			{[1].map((_x) => {
				const discord_supporter_list = new Intl.ListFormat("en", {
					style: "long",
					type: "conjunction",
				}).formatToParts(props.supporters.discord)

				return (
					<div class="flex flex-col gap-4 border-solid border-gray-400 border p-4 px-6">
						<h1 class="m-0">
							Callout to the Real Ones
						</h1>
						<p class="m-0">
							As always, a big thank you to all my financial
							supporters, you were the real ones all along, I am
							eternally grateful for funding my work and sticking
							around with me.
						</p>

						<p class="m-0">
							Special Thanks to{"  "}
							{discord_supporter_list.map((part) => {
								switch (part.type) {
									case "element":
										return (
											<span class="font-bold text-[#4FB4D7]">
												{part.value}
											</span>
										)
									default:
										return part.value
								}
							})}{"   "}for supporting me by gifting me{" "}
							<span class="font-bold text-[#5b64f3]">
								Discord Nitro
							</span>{" "}
							on a monthly basis!
						</p>
					</div>
				)
			})}

			{props.authors.map((author: string) => {
				const author_data = props.authors_db.find((a: AuthorInfo) =>
					a.name === author
				)
				return (
					<div class="flex flex-col md:flex-row gap-4 border-solid border-gray-400 border p-4 px-6">
						<img
							src={author_data?.pfp}
							class="h-auto w-full md:w-32 rounded-full"
						/>
						<div class="flex flex-col gap-4">
							<h1 class="m-0">
								{author_data?.name}{"  "}
								<span className="text-base text-black opacity-50 font-bold">
									{author_data?.pronouns}
								</span>
							</h1>
							<p class="m-0">{author_data?.desc}</p>
						</div>
					</div>
				)
			})}
		</section>
	</>
)

export default function Layout(props: Props) {
	return (
		<>
			<html lang="en">
				<head>
					<Meta {...props} />
				</head>
				<body>
					<Header />
					<main
						id={props.blog ? "blog-content" : "content"}
						class={props.blog
							? "px-4 md:px-96"
							: "grow flex flex-col"}
					>
						{props.blog
							? (
								<>
									<BlogDetail {...props} />
									{props.children}
									<BlogConcluder {...props} />
								</>
							)
							: (
								<>
									{props.children}
								</>
							)}
					</main>
					<Footer />
				</body>
			</html>
		</>
	)
}
