const layout = "speclabs.tsx",
	meta = {
		title: "",
		description: "",
	},
	home = true

export { home, layout, meta }

export default function () {
	return (
		<>
			<section class="flex flex-col md:flex-row gap-8 justify-between items-center mt-8 md:mt-16">
				<img src="/assets/remod.png" class="h-48" />
				<h1 class="m-0 text-6xl">
					Re<span class="text-[#414DC9]">Mod</span>{" "}
					<span class="font-light">Software</span> <br />
					<span class="font-normal text-3xl">Speclabs</span>
				</h1>
			</section>
			<section class="flex flex-col gap-8 my-16">
				<p class="m-0 text-xl">
					The Crackhouse where we cook up the most crackheaded goofy
					aah ideas for our next projects, oh also the place we rack
					up our drug debt please send donations, thanks.
				</p>
				<table class="text-xl border-collapse">
					<tr class="h-16 text-left border-solid border-0 border-b-2 border-gray-800">
						<th class="w-[30%]">Project</th>
						<th class="w-[70%]">Description</th>
					</tr>
					<tr class="h-48 md:h-24">
						<td>
							<a class="text-[#414DC9] visited:text-[#414DC9] no-underline underline-offset-2 hover:underline" href="/speclabs/raptor-rt">RaptorRT</a>
						</td>
						<td>A Server Runtime for JavaScript and family focusing on Web Standards, Extensibility, and Efficiency.</td>
					</tr>
				</table>
			</section>
		</>
	)
}
