const layout = "main.tsx",
	meta = {
		title: "LePichu | Portfolio",
		description:
			"Ayo, I also make cool and perhaps cursed things, check them out!",
	}

export { layout, meta }

interface Project {
	name: string
	description: string
	image: string
	link: string
}

function ProjectCard(props: Project) {
	return (
		<>
			<div class="flex flex-col gap-4 border-solid border-gray-400 border-2 p-6 rounded-lg">
				<img src={props.image} class="h-auto w-full" />
				<div class="flex flex-row justify-between items-center">
					<h1 class="m-0 text-3xl md:text-4xl">{props.name}</h1>
					<a
						class="flex justify-center items-center h-12 w-12 bg-black rounded-md"
						href={props.link}
						target="_blank"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="32"
							height="32"
						>
							<path fill="none" d="M0 0h24v24H0z"></path>
							<path
								d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"
								fill="rgba(255,255,255,1)"
							>
							</path>
						</svg>
					</a>
				</div>
				<p class="m-0">{props.description}</p>
			</div>
		</>
	)
}

const RAPTOR_TOOLS: Array<Project> = [
	{
		name: "RaptorFX",
		description:
			"A GUI Framework Powered by Web Technologies and Standards, built on top of WebViews and the Deno Runtime.",
		image: "https://cdn.discordapp.com/attachments/736493162117464084/1117187600453746769/raptorfx_banner.png",
		link: "https://raptorfx.deno.dev/",
	},
	// {
	// 	name: "Pyroraptor",
	// 	description:
	// 		"A CLI Framework built on top of Deno, consists of a whole Flag Parser Pipeline, TUI Components, and more.",
	// 	image: "https://raptorfx.deno.dev/assets/banner.png",
	// 	link: "https://pyroraptor.deno/dev/",
	// },
	// {
	// 	name: "Utahraptor",
	// 	description:
	// 		"A Fullstack Framework built for the Edge, but primarily for Deno, with being JS Framework Agnostic in mind.",
	// 	image: "https://raptorfx.deno.dev/assets/banner.png",
	// 	link: "https://utahraptor.deno.dev/",
	// },
]

const SIDE_PROJECTS: Array<Project> = [
	{
		name: "Aurora",
		description:
			"A Customizable and Fast PowerShell Prompt, written to be like starship-rs.",
		image:
			"https://cdn.discordapp.com/attachments/736493162117464084/1117190131120619550/IMG_20230611_015551.png",
		link: "https://github.com/LePichu/Aurora",
	},
]

const COMMISSIONS: Array<Project> = [
	{
		name: "QuickStay",
		description:
			"QuickStay Rooms is an online service dedicated to finding PGs for students and alike.",
		image: "https://cdn.discordapp.com/attachments/736493162117464084/1117176059285213254/quickstay_material.png",
		link: "https://quickstayrooms.com/",
	},
]

export default function () {
	return (
		<>
			<section class="px-4 md:px-40">
				<h1 class="m-0 text-4xl md:text-5xl">My Works</h1>
				<p class="md:text-xl m-0 mt-2 mb-8">
					Here is a collection of all my work that I am proud of and
					treat as my primary projects, ranging from basic but useful
					libraries or frameworks, to full-blown toolchains made for
					ecosystems.
				</p>

				<h1 class="m-0 md:text-3xl">Raptor Tools</h1>
				<p class="md:text-xl m-0 mt-2">
					Raptor Tools is a toolchain for building apps with the Deno
					Runtime for JavaScript, providing a GUI Framework, CLI
					Framework, and a Fullstack Framework. All built on top of
					Deno, and with languages like Rust and Zig in the mix.
				</p>
				<section class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 mb-8">
					{RAPTOR_TOOLS.map((project) => (
						<ProjectCard
							{...project}
						/>
					))}
				</section>

				<h1 class="m-0 md-text-3xl">Tiny Side Projects</h1>
				<p class="md:text-xl m-0 mt-2">
					Some of my tiny side projects, which are more or less one
					time projects, with no extended support and often made for
					my personal usage.
				</p>
				<section class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 mb-8">
					{SIDE_PROJECTS.map((project) => (
						<ProjectCard
							{...project}
						/>
					))}
				</section>

				<h1 class="m-0 md-text-3xl">Commissions</h1>
				<p class="md:text-xl m-0 mt-2">
					Projects that I worked on for money, or were requested to
					work on. Mostly websites that are worth showcasing if
					anything, nothing more.
				</p>
				<section class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 mb-8">
					{COMMISSIONS.map((project) => (
						<ProjectCard
							{...project}
						/>
					))}
				</section>
			</section>
		</>
	)
}
