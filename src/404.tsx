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
			<section class="m-4 text-center text-black">
				<img src="/assets/cat_dead.png" class="w-auto h-48 m-0" />
				<h1>Oh nyowos~! {">//-//<"}</h1>
				<p>We can't find the page you were looking for, sowwy~!</p>
			</section>
		</>
	)
}
