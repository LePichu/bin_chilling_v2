import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"

const URL = `https://lepichudoes.deno.dev`

interface Props {
	children: Element
	meta: {
		title: string | undefined
		description: string | undefined
		image: string | undefined
		theme: string | undefined
	}
	blog: boolean
}

export default function Layout(props: Props) {
	return (
		<>
			<html lang="en">
				<head>
					<meta charSet="UTF-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>

					<link rel="stylesheet" href="/index.css" />
					<link rel="icon" href="/assets/icon.png" />

					<title>{props.meta.title ?? "LePichu | Website"}</title>

					<meta
						name="description"
						content={props.meta.description ?? "LePichu | Website"}
					/>
					<meta name="twitter:card" content="summary_large_image" />
					<meta
						property="twitter:image"
						content={props.meta.image ?? `${URL}/assets/icon.png`}
					/>
					<meta
						property="og:image"
						content={props.meta.image ?? `${URL}/assets/icon.png`}
					/>
					<meta property="og:url" content={URL} />
					<meta
						name="theme-color"
						content={props.meta.theme ?? "#1b3f4b".toUpperCase()}
					/>
				</head>
				<body>
					<Header />
					<div id={props.blog ? "blog-content" : "content"}>
						{props.children}
					</div>
					<Footer />
				</body>
			</html>
		</>
	)
}
