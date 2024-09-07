import Server from "https://deno.land/x/lume@v1.17.5/core/server.ts"
import not_found from "https://deno.land/x/lume@v1.17.5/middlewares/not_found.ts"
import redirects from "https://deno.land/x/lume@v1.17.5/middlewares/redirects.ts"

const server = new Server({
	port: 8000,
	root: ".",
})

server.use(not_found({
	root: ".",
	page404: "/404.html",
}))

server.use(redirects({
	redirects: {
		"/cuhp_2024": "https://chat.whatsapp.com/DKa0xkKrJn7AYWMGgjILtc"
	},
}))

server.start()

console.log("Listening on http://localhost:8000")
