import Site from "lume/core/site.ts"
import { getHighlighter } from "https://esm.sh/shiki@1.16.2/"

const fleetDark = JSON.parse(
	Deno.readTextFileSync(`${import.meta.dirname}/fleet-dark.json`),
)

const highligher = await getHighlighter({
	themes: [
		fleetDark,
	],
	langs: [
		"rust",
		"js",
		"jsx",
		"ts",
		"tsx",
		"sh",
		"ps1",
		"crystal",
	],
})

export default function shiki() {
	return (site: Site) => {
		site.process([".html", ".mdx"], async (pages) => {
			for await (const page of pages) {
				for await (
					const el of page.document?.querySelectorAll("pre code")!
				) {
					if (el.parentElement) {
						if (el.parentElement) {
							const codeHtml = highligher.codeToHtml(
								(el as unknown as HTMLSourceElement).innerText,
								{
									lang: (el as unknown as HTMLSourceElement)
										.getAttribute("class")?.split(" ")[0]
										.replace("language-", "")!,
									// use Material until Fleet Dark is ready
									theme: "fleet-dark",
								},
							)
							el.parentElement.innerHTML = codeHtml
						}
					}
				}
			}
		})
	}
}
