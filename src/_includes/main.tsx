import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"

const URL = `https://lepichudoes.deno.dev`

interface Props {
    children: Element
    meta: {
        title: string | undefined
        description: string | undefined
        image: string | undefined
        theme : string | undefined
    }
}

export default function Layout(props: Props) {
    return (
        <>
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    <link rel="stylesheet" href="/index.css" />
                    <link rel="icon" href="/assets/icon.png" />

                    <title>{props.meta.title ?? "LePichu | Website"}</title>

                    <meta name="description" content={props.meta.description ?? "LePichu | Website"} />
                    <meta
                        property="og:image"
                        content={
                            `${URL}/${props.meta.image}` ?? `${URL}/assets/icon.png`
                        }
                    />
                    <meta
                        property="twitter:image"
                        content={
                            `${URL}/${props.meta.image}` ?? `${URL}/assets/icon.png`
                        }
                    />
                    <meta property="og:url" content={URL} />
                    <meta name="theme-color" content={
                        props.meta.theme ?? "##1b3f4b"
                    } />
                </head>
                <body>
                    <Header />
                    <div id="content">
                        {props.children}
                    </div>
                    <Footer />
                </body>
            </html>
        </>
    )
}