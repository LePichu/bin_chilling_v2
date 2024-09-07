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

if (window.location.pathname === "/") {
	setTimeout(() => {
		document.querySelector(".hello").animate(
			[
				{ opacity: 0 },
				{ opacity: 1 },
			],
			{
				duration: 250,
				fill: "forwards",
				iterations: 1,
			},
		)
		document.querySelectorAll(".animated-name").forEach((el) => {
			setTimeout(() => {
				el.classList.remove("hidden")
			}, parseInt(el.getAttribute("data-index")) * 125)
		})
	}, 1000)

	setTimeout(() => {
		document.querySelector(".animated-title").animate([
			{ opacity: 0 },
			{ opacity: 1 },
		], {
			duration: 500,
			fill: "forwards",
			iterations: 1,
		})
	}, 2000)

	setTimeout(() => {
		document.querySelectorAll(".animated-tag").forEach((el) => {
			setTimeout(() => {
				el.animate([
					{
						opacity: 0,
						transform: "translateY(-2rem)",
					},
					{
						transform: "translateY(0.5rem)",
						offset: 0.9,
					},
					{
						opacity: 1,
						transform: "translateY(0)",
					},
				], {
					duration: 250,
					fill: "forwards",
					iterations: 1,
				})
			}, parseInt(el.getAttribute("data-index")) * 250)
		})
	}, 2500)

	setTimeout(() => {
		document.querySelector(".intro-text")
		document.querySelectorAll(".intro-text *").forEach((el) => {
			setTimeout(() => {
				el.animate([
					{ opacity: 0 },
					{ opacity: 1 },
				], {
					duration: 500,
					fill: "forwards",
					iterations: 1,
				})
			}, parseInt(el.getAttribute("data-index")) * 50)
		})
	}, 2750)

	const techObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (
				entry.isIntersecting &&
				!entry.target.classList.contains("animated")
			) {
				entry.target.classList.add("animated")
				setTimeout(() => {
					entry.target.animate(
						[
							{ opacity: 0, scale: 0, rotate: "-105deg" },
							{ scale: 0, rotate: "45deg", offset: 0.6 },
							{ rotate: "-22.5deg", offset: 0.7 },
							{ rotate: "11.75deg", offset: 0.8 },
							{ opacity: 0.5, scale: 1, rotate: "0deg" },
						],
						{
							duration: 1000,
							fill: "forwards",
							iterations: 1,
						},
					)
				}, entry.target.getAttribute("data-index") * 250)
				entry.target.addEventListener("mouseover", () => {
					entry.target.animate(
						[
							{ opacity: 0.5 },
							{ opacity: 1 },
						],
						{
							duration: 250,
							fill: "forwards",
							iterations: 1,
						},
					)
				})
				entry.target.addEventListener("mouseleave", () => {
					entry.target.animate(
						[
							{ opacity: 1 },
							{ opacity: 0.5 },
						],
						{
							duration: 250,
							fill: "forwards",
							iterations: 1,
						},
					)
				})
			}
		})
	})

	document.querySelectorAll(".tech").forEach((tech) => {
		setTimeout(() => {
			techObserver.observe(tech)
		}, 3000)
	})

	const fadeObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.animate(
					[
						{ opacity: 0 },
						{ opacity: 1 },
					],
					{
						duration: 500,
						fill: "forwards",
						iterations: 1,
					},
				)
			}
		})
	})

	document.querySelectorAll(".tech-intro, .intro-redir").forEach((fade) => {
		setTimeout(() => {
			fadeObserver.observe(fade)
		}, 3250)
	})
}

if (window.location.pathname === "/blog/") {
	const search = document.querySelector("input[type=search]")
	const blogGrid = document.querySelector("#blog-grid")
	const featured = document.querySelector("#featured")

	const blogs = blogGrid.querySelectorAll("a")
	blogs.forEach((blog) => {
		blog.addEventListener("pointerover", () => {
			blogs.forEach((b) => {
				if (b !== blog) {
					b.style.filter = "grayscale(1) blur(1px)"
					b.style.opacity = "0.5"
				}
			})
		})

		blog.addEventListener("pointerout", () => {
			blogs.forEach((b) => {
				if (b !== blog) {
					b.style.filter = "none"
					b.style.opacity = "1"
				}
			})
		})
	})

	search.addEventListener("input", () => {
		const searchValue = search.value.toLowerCase()
		const articles = blogGrid.querySelectorAll(".blog-post")

		// if search is empty show all articles have featured section be visible otherwise toggle the hidden on it
		if (searchValue === "") {
			featured.classList.remove("hidden")
		} else {
			featured.classList.add("hidden")
		}

		articles.forEach((article) => {
			const articleTitle = article.querySelector("h1").textContent
				.toLowerCase()
			const articleDesc = article.querySelector("p").textContent
				.toLowerCase()
			const articleTags = []

			article.querySelectorAll("section span").forEach((tag) =>
				articleTags.push(tag.textContent.toLowerCase())
			)

			const articleData = `${articleTitle}; ${articleDesc}; ${
				articleTags.join(", ")
			}`

			if (articleData.includes(searchValue)) {
				article.style.display = "flex"
			} else {
				article.style.display = "none"
			}
		})
	})
}
