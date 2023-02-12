export default function About() {
	return (
		<>
			<section id="about">
				<img src="/assets/icon.png" />
				<span id="about-text">
					<h3>Hello, I am</h3>
					<h1>
						Ishat <span>"LePichu"</span> Gupta
					</h1>
				</span>
			</section>

			<section id="about-desc">
				Hello! I am <b>Ishat Gupta</b>, but also go by the alias{" "}
				<b>LePichu</b>. I am 16, live in India, and speak English &
				Hindi. I work at <br id="mobile-fix-company" />
				<span class="company" id="octovon">
					<img src="/assets/companies/octovon.png" />
					<a href="https://octovon.net">Octovon</a>
				</span>
				and founded
				<span class="company" id="remod">
					<img src="/assets/companies/remod.png" />
					<a href="https://remod.dev">
						Re<span>Mod</span>
					</a>
				</span>.
			</section>

			<section id="langs">
				<h1>
					I like to use...
				</h1>

				<br />

				<section>
					{[
						"Rust",
						"TypeScript",
						"Crystal",
						"PowerShell",
					].map((lang) => (
						<img
							src={`/assets/langs/${lang.toLowerCase()}.png`}
							alt={`Logo of ${lang}.`}
						/>
					))}
				</section>
			</section>

			<section id="tech-stack">
				<h1>
					... But I am also comfortable with...
				</h1>

				<br />

				<section>
					{[
						"CSS",
						"Sass",
						"Tailwind",
						"Deno",
						"React",
						"Vue",
						"Solid",
						"Preact",
						"Java",
						"Scala",
					].map((lang) => (
						<img
							src={`/assets/langs/${lang.toLowerCase()}.png`}
							alt={`Logo of ${lang}.`}
						/>
					))}
				</section>
			</section>

			<section id="tech-stack">
				<h1>
					... and I dislike working with...
				</h1>

				<br />

				<section>
					{[
						"Kotlin",
						"Android",
					].map((lang) => (
						<img
							src={`/assets/langs/${lang.toLowerCase()}.png`}
							alt={`Logo of ${lang}.`}
						/>
					))}
				</section>
			</section>

			<section id="langs">
				<h1>
					... and I am also interested in...
				</h1>

				<br />

				<section>
					{[
						"Gleam",
						"Elixir",
						"Clojure",
						"Vale",
					].map((lang) => (
						<img
							src={`/assets/langs/${lang.toLowerCase()}.png`}
							alt={`Logo of ${lang}.`}
						/>
					))}
				</section>
			</section>

			<section id="worked-on">
				<h1>
					... and I have worked on/at...
				</h1>

				<br />

				<section>
					{Object.entries({
						"RaptorFX": {
							link: "https://raptorfx.deno.dev", 
							img: "/assets/works/raptorfx.png",
							desc: "A Project which aims to allow App Development using Deno and WebViews."
						},
						"Salta": {
							link: "https://github.com/ReMod-Software/Salta", 
							img: "/assets/works/salta.png",
							desc: "A Dart-Sass wrapper for Deno."
						},
						"Shighruh": {
							link: "https://github.com/ReMod-Software/Shighruh",
							img: "/assets/works/shighruh.png",
							desc: "A Small project which aims to provide better Svelte integration on Deno."
						}
					}).map(([k, v]) => (
						<div>
							<img src={v.img} /> <br />
							<a href={v.link}>{k}</a>
							<p>{v.desc}</p>
						</div>
					))}
				</section>
			</section>
		</>
	)
}
