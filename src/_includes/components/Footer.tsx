const socials = {
	"twitter": "https://twitter.com/ishatgupta",
	"github": "https://github.com/lepichu",
	"instagram": "https://instagram.com/lepichudoesdev",
	"discord": "https://discord.gg/jvHdkCtjCZ",
}

export default function Footer() {
	return (
		<>
			<footer class="bg-black p-8 flex flex-col gap-8 justify-between items-center">
				<section className="flex flex-row gap-8">
					{Object.entries(socials).map(([k, v]) => (
						<a
							href={v}
							class="h-12 w-12 no-underline opacity-50 hover:opacity-100 duration-[250ms]"
							target="_blank"
						>
							<img
								src={`/assets/socials/logo--${k}.svg`}
								className="h-12 w-12 invert"
							/>
						</a>
					))}
				</section>

				<p class="text-white text-center font-normal text-xl m-0">
					© Copyright 2023 to Present{" "}
					<span class="hidden md:inline-block">{"-"}</span>{" "}
					<br class="md:hidden" /> Ishat "LePichu" Gupta
				</p>
			</footer>
		</>
	)
}
