export default function Header() {
	return (
		<>
			<header>
				<a href="/">
					<img src="/assets/pichu.png" />
				</a>
				<nav>
					<ul>
						{["ABOUT", "BLOG"].map((x) => (
							<li>
								<a href={`/${x.toLowerCase()}`}>{x}</a>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	)
}
