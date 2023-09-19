import { SpecLabsData as Props } from "./Types.ts"

const Socials = {
	"Discord": "https://discord.gg/Nhvt7X84Hj",
	"GitHub": "https://github.com/ReMod-Software",
	"Twitter": "https://twitter.com/ReModSoftware",
}

const Meta = (props: Props) => {
	const title = `ReMod SpecLabs | ${props.meta.title}` ??
		"ReMod SpecLabs | Home"
	const description = props.meta.description ?? "LePichu | Website"
	const image = props.meta.image ?? "/assets/speclabs_meta.png"
	const theme = props.meta.theme ?? "#414DC9"
	const URL = `https://lepichudoes.deno.dev/speclabs/`

	return (
		<>
			<meta charSet="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>

			<link rel="stylesheet" href="/styles/speclabs.css" />
			<link rel="icon" href="/assets/remod.png" />
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

export default function Layout(props: Props) {
	return (
		<>
			<html lang="en">
				<head>
					<Meta {...props} />
				</head>
				<body class="flex flex-col min-h-[100vh] bg-[#F4F4F4] m-0">
					<header class="flex justify-between items-center bg-[#161616] h-16 w-full">
						{props.home
							? (
								<>
									<a
										class="flex aspect-square h-full justify-center items-center"
										href="/"
									>
										<svg
											id="icon"
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											viewBox="0 0 32 32"
										>
											<defs>
												<style>
													{`
                                                    .cls-1 {
                                                        fill: none;
                                                    }
                                                    `}
												</style>
											</defs>
											<rect
												id="_Transparent_Rectangle_"
												data-name="&lt;Transparent Rectangle&gt;"
												class="cls-1"
												width="32"
												height="32"
											/>
											<path
												d="M16.6123,2.2138a1.01,1.01,0,0,0-1.2427,0L1,13.4194l1.2427,1.5717L4,13.6209V26a2.0041,2.0041,0,0,0,2,2H26a2.0037,2.0037,0,0,0,2-2V13.63L29.7573,15,31,13.4282ZM18,26H14V18h4Zm2,0V18a2.0023,2.0023,0,0,0-2-2H14a2.002,2.002,0,0,0-2,2v8H6V12.0615l10-7.79,10,7.8005V26Z"
												transform="translate(0 0)"
											/>
										</svg>
									</a>
								</>
							)
							: (
								<>
									<a
										class="flex aspect-square h-full justify-center items-center"
										href="/speclabs/"
									>
										<svg
											id="icon"
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											viewBox="0 0 32 32"
										>
											<defs>
												<style>
													{`
                                                    .cls-1 {
                                                        fill: none;
                                                    }
                                                    `}
												</style>
											</defs>
											<polygon points="14 26 15.41 24.59 7.83 17 28 17 28 15 7.83 15 15.41 7.41 14 6 4 16 14 26" />
											<rect
												id="_Transparent_Rectangle_"
												data-name="&lt;Transparent Rectangle&gt;"
												class="cls-1"
												width="32"
												height="32"
											/>
										</svg>
									</a>
								</>
							)}
						{props.home
							? (
								<h1 class="m-0 font-light grow text-center text-white text-xl">
									<span class="font-semibold mr-4">
										Re
										<span class="text-[#414DC9]">Mod</span>
									</span>
									SpecLabs
								</h1>
							)
							: (
								<h1 class="m-0 font-light grow text-center text-white text-xl">
									<a class="text-white visited:text-white no-underline hover:underline underline-offset-2" href="/speclabs/">
										{"ReMod"}
									</a>
									<span>{" / "}</span>
									<a class="text-white visited:text-white font-medium no-underline hover:underline underline-offset-2" href={props.url}>
										{props.meta.title}
									</a>
								</h1>
							)}
					</header>
					<main
						class={`p-4 md:px-32 lg:px-64 grow ${
							props.home ? "" : "specsheet"
						}`}
					>
						{props.children}
					</main>
					<footer class="flex flex-col justify-center items-center gap-8 bg-[#161616] h-48 w-full">
						<div class="flex flex-row gap-6">
							{Object.entries(Socials).map(([name, url]) => {
								return (
									<a
										href={url}
										class="flex justify-center items-center h-8 w-8 text-white visited:text-white no-underline opacity-50 hover:opacity-100 duration-[250ms]"
										target="_blank"
									>
										<img
											src={`/assets/socials/${name.toLowerCase()}.png`}
											class="w-8"
										/>
									</a>
								)
							})}
						</div>
						<p class="m-0 text-xl text-white">
							© 2023 - ReMod Private Ltd.
						</p>
					</footer>
				</body>
			</html>
		</>
	)
}
