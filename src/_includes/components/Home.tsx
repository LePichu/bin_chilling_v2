export default function Home() {
	return (
		<div id="home">
			<img src="/assets/icon.png" />
			<br />
			<br />
			<h1>
				Hi, I do things.
			</h1>
			<br />
			<div>
				{Object.entries({
					"Learn More": "/about",
					"Read My Ramblings": "/blog",
				}).map(([k, v]) => {
					return (
						<a href={v}>
							{k}
						</a>
					)
				})}
			</div>
		</div>
	)
}
