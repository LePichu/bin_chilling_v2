const mobileNavButton = document.querySelector("#header-nav-button")
let mobileNavButtonVisibleState = false

mobileNavButton.addEventListener("click", () => {
	console.log("meow")
	const nav = document.querySelector("#header-nav-mobile")

	mobileNavButtonVisibleState = !mobileNavButtonVisibleState

	if (mobileNavButtonVisibleState) {
		nav.animate([
			{
				opacity: 0,
				transform: "translateY(-1rem)",
				maxHeight: "0",
				marginTop: "1rem",
			},
			{
				opacity: 1,
				transform: "translateY(0)",
				maxHeight: "2rem",
				marginTop: "1rem",
			},
		], {
			duration: 100,
			fill: "forwards",
			iterations: 1,
		})
		nav.classList.toggle("hidden")
		nav.classList.toggle("flex")
	} else {
		nav.animate([
			{ opacity: 1, transform: "translateY(0)", maxHeight: "2rem" },
			{
				opacity: 0,
				transform: "translateY(-1rem)",
				maxHeight: "0",
				marginTop: "0",
			},
		], {
			duration: 100,
			fill: "forwards",
			iterations: 1,
		})
		setTimeout(() => {
			nav.classList.toggle("hidden")
			nav.classList.toggle("flex")
		}, 100)
	}
})
