// ---
// layout: main.tsx
// meta:
//     title: "LePichu | 404 - Page Not Found!"
//     description: "404"
//     banner: "allah"
//     theme: "#000000"
// ---
// # 404
// Among Us Imposter not found.

const layout = "main.tsx",
	meta = {
		title: "LePichu | 404 - Page Not Found!",
		description: "404",
		banner: "allah",
		theme: "#000000",
	}

export { layout, meta }

export default function () {
	return (
		<>
			<section class="flex flex-col grow gap-2 items-center justify-center">
				{/* <section class="flex flex-col m-4 items-center justify-center text-center text-black"> */}
				<img src="/assets/cat_dead.png" class="w-auto h-48 m-0" />
				<h1 class="m-0">Oh nyowos~! {">//-//<"}</h1>
				<p class="m-0 px-20 text-center">
					We can't find the page you were looking for, sowwy~!
				</p>
				{/* </section> */}
			</section>
		</>
	)
}
