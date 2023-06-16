const layout = "main.tsx",
	meta = {
		title: "LePichu | Home",
		description: "Heya, welcome to my website!",
	}

export { layout, meta }

export default function () {
	return (
		<>
			<section class="flex justify-center items-center">
				<div class="flex flex-col gap-4 text-center p-8">
					<img src="/assets/cat_sad.png" class="w-48 h-auto m-auto" />
					<h1 class="text-xl md:text-4xl font-bold m-0">
						Sorry, we are under construction!
					</h1>
					<p class="m-0 text-[1.1rem]">
						Please come back later, in meantime consider checking
						out my blog!
					</p>
					<a
						class="m-0 flex justify-center items-center max-w-full p-4 text-xl rounded-md bg-black text-white no-underline underline-offset-4 visited:text-white hover:underline"
						href="/blog/"
						id="lepichu-text"
					>
						Check My Blog!
					</a>
				</div>
			</section>
		</>
	)
}
