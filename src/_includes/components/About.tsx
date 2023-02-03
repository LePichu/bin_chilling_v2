export default function About() {
    return <>
        <section id="about">
            <img src="/assets/icon.png" />
            <span id="about-text">
                <h3>Hello, I am</h3>
                <h1>Ishat <span>"LePichu"</span> Gupta</h1>
            </span>
        </section>

        <br />

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
                    "PowerShell"
                ].map(lang => <img src={`/assets/langs/${lang.toLowerCase()}.png`} alt={`Logo of ${lang}.`} />)}    
            </section>    
        </section>
    </>
}