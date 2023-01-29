const socials = {
    "twitter": "https://twitter.com/ishatgupta",
    "github": "https://github.com/lepichu",
    "instagram": "https://instagram.com/lepichudoesdev"
}

export default function Footer() {
    return <>
        <footer>
            <section id="socials">
                {Object.entries(socials).map(([k,v]) => <a href={v}><img src={`/assets/socials/${k}.png`} /></a>)}
            </section>
            <h3>
                © Copyright 2023 - Ishat "LePichu" Gupta
            </h3>
            <br />
        </footer>
    </>
}