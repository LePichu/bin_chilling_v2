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

export default function () {
	return (
		<>
			<section class="px-4 md:px-40">
			</section>
		</>
	)
}
