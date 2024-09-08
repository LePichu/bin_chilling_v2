const layout = "main.tsx",
	meta = {
		title: "LePichu | Home",
		description: "Heya, welcome to my website!",
	}

export { layout, meta }

interface Tag {
	icon: string
	text: string
}

const TAGS: Record<string, Tag> = {
	"age": {
		icon: "time--filled",
		text: "18 | 04/06/2006",
	},
	"pronouns": {
		icon: "user--avatar--filled",
		text: "They/Them",
	},
	"location": {
		icon: "location--filled",
		text: "India",
	},
	"languages": {
		icon: "microphone--filled",
		text: "English, Hindi",
	},
}

// deno-lint-ignore no-unused-vars
function Construction() {
	return (
		<div class="flex flex-col gap-4 text-center p-8">
			<img src="/assets/cat_sad.png" class="w-48 h-auto m-auto" />
			<h1 class="text-xl md:text-4xl font-bold m-0">
				Sorry, we are under construction!
			</h1>
			<p class="m-0 text-[1.1rem]">
				Please come back later, in meantime consider checking out my
				blog!
			</p>
			<a
				class="m-0 flex justify-center items-center max-w-full p-4 text-xl rounded-md bg-black text-white no-underline underline-offset-4 visited:text-white hover:underline"
				href="/blog/"
				id="lepichu-text"
			>
				Check My Blog!
			</a>
		</div>
	)
}

function About() {
	return (
		<>
			<div class="flex flex-col grow gap-16 p-4 px-8 py-8 md:px-64">
				<div class="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 md:gap-16">
					<div class="flex h-full w-full rounded-full aspect-square bg-black">
						<img
							src="/assets/pfp/lepichu.png"
							class="w-full h-auto rounded-full aspect-square"
							id="animated-pfp"
						/>
					</div>

					<div class="flex flex-col gap-2 justify-between py-4">
						<h1 class="flex flex-col gap-2 m-0 font-mono">
							<span class="block font-normal opacity-0 transition-all hello">
								Hello, I am
							</span>
							<span class="block font-bold text-6xl">
								{"LePichu".split("").map((letter, index) => {
									return (
										<span
											class="hidden font-bold text-black animated-name"
											data-index={index}
										>
											{letter}
										</span>
									)
								})}
								<span class="blink">_</span>
							</span>
							<span class="text-gray-400 font-semibold animated-title opacity-0 transition-all">
								Engineer & Artist
							</span>
						</h1>

						<div class="flex flex-wrap gap-4 md:w-[50%] mt-4 md:mt-0">
							{Object.entries(TAGS).map(([_key, value], i) => {
								return (
									<span
										class="flex flex-row justify-center items-center gap-2 rounded-lg bg-gray-200 text-gray-700 uppercase text-sm font-bold p-2 pr-3 opacity-0 animated-tag"
										data-index={i}
									>
										<img
											src={`/assets/svg/${value.icon}.svg`}
											class="w-auto h-6 inline opacity-50"
										/>
										{value.text}
									</span>
								)
							})}
						</div>
					</div>
				</div>
				{/* <div>
					<p class="text-lg flex flex-wrap m-0 intro-text">
						Meow Meow Meow
					</p>
				</div>
				<div class="flex justify-center items-center w-full">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[50%]">
						{Object.entries({
							"Read my blog!": "/blog/",
							"Wanna see what I do?": "/projects/",
						}).map(([k, v]) => {
							return (
								<a
									href={v}
									class="p-4 border border-solid border-black bg-black text-white hover:bg-white hover:text-black hover:underline underline-offset-2 transition-all text-center no-underline uppercase font-semibold opacity-0 intro-redir"
								>
									{k}
								</a>
							)
						})}
					</div>
				</div>
				<div class="flex flex-col gap-8">
					<h1 class="m-0 text-center opacity-0 tech-intro">
						Here's what I work with!
					</h1>
					<div class="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
						{[
							"Rust",
							"TypeScript",
							"PowerShell",
						].map((tech, i) => (
							<img
								src={`/assets/tech/${tech}.png`}
								class="h-24 w-24 opacity-0 grayscale hover:grayscale-0 transition-all tech"
								data-index={i}
							/>
						))}
					</div>
				</div> */}
			</div>
		</>
	)
}

export default function () {
	return (
		<>
			<section class="flex justify-center items-center grow">
				<About />
			</section>
		</>
	)
}
