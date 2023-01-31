function getBlogPostsDir() {
    const posts: Array<string> = []
    for(const post of Deno.readDirSync(`${Deno.cwd()}/src/blog/`)) {
        if(post.isFile) {
            posts.push(post.name)
        }
    }
    return posts.filter(post => post.toString() !== "index.mdx" && !post.endsWith(".md"))
}

export default function BlogIndex() {
    return <>
        <ul id="blog-index">
            {getBlogPostsDir().map(post => {
                return <li>
                    <a href={`/blog/${post.replace(".mdx", "")}`} class="blog-post">
                        {post.toString().replace(".mdx", "").split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                    </a>
                </li>
            })}
        </ul>
    </>
}
