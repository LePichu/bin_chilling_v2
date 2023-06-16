import { createRef } from "preact"

const TableIcon = (
	<>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path fill="none" d="M0 0h24v24H0z"></path>
			<path
				d="M15 21H9V10H15V21ZM17 21V10H22V20C22 20.5523 21.5523 21 21 21H17ZM7 21H3C2.44772 21 2 20.5523 2 20V10H7V21ZM22 8H2V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V8Z"
				fill="rgba(255,255,255,1)"
			>
			</path>
		</svg>
	</>
)

export default function Header() {
	return (
		<>
			<header class="p-4 flex flex-col sticky top-0">
				<section class="flex justify-between items-center">
					<a href="/" className="no-underline">
						<h1
							class="bg-black text-white py-2 px-4 m-0"
							id="lepichu-text"
						>
							LePichu
						</h1>
					</a>
					<nav
						class="hidden md:flex flex-row gap-8"
						id="header-nav-desktop"
					>
						{["Blog", "Portfolio"].map((x) => (
							<a
								href={`/${x.toLowerCase()}`}
								class="text-2xl font-bold text-black visited:text-black no-underline hover:underline header-nav"
							>
								{x}
							</a>
						))}
					</nav>
					<nav
						className="md:hidden aspect-square flex h-12 w-12 justify-center items-center bg-black rounded"
						id="header-nav-button"
					>
						<button className="flex h-full w-full justify-center items-center bg-transparent border-none">
							{TableIcon}
						</button>
					</nav>
				</section>
				<nav
					class="hidden mt-4 justify-evenly items-center"
					id="header-nav-mobile"
				>
					{["Blog", "Portfolio"].map((x) => (
						<a
							href={`/${x.toLowerCase()}`}
							class="text-xl font-bold text-black visited:text-black no-underline hover:underline header-nav"
						>
							{x}
						</a>
					))}
				</nav>
			</header>
		</>
	)
}
