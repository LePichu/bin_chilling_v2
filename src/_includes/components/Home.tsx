export default function Home() {
    return (
        <div id="home">
            <img src="/assets/icon.png" />
            <h1>
                Hi, I do things.
            </h1>
            <br /><br />
            {Object.entries({
                "Learn More": "/about",
                "Read My Ramblings": "/blog",
            }).map(([k, v]) => {
                return <a href={v}>
                    {k}
                </a>
            })}
        </div>
    )
}