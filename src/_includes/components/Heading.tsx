import { h } from "npm:preact"

interface Props {
    level: number
    text: string
}

export default function Heading(props: Props) {
    const autolink = props.text.toLowerCase().replace(/ /g, "-")
    return h(
        `h${props.level}`,
         {
            id: autolink,
            dangerouslySetInnerHTML: {
                __html: `<a href="#${autolink}" class="autolink">#</a>${props.text}`
            }
        }
    )
}