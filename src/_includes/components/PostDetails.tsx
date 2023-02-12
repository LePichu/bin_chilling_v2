interface Props {
	thumbnail: string
	read_time: string
	publish: string
	written_by: Array<string>
}

export default function PostDetails(props: Props) {
	return (
		<>
			<section class="post-details">
				<img src={props.thumbnail} />

				<h1>
					<span class="material-icons">timer</span>
					{props.read_time}
				</h1>

				<h1>
					<span class="material-icons">insert_invitation</span>
					{props.publish}
				</h1>

				<h1>
					<span class="material-icons">people</span>
					{new Intl.ListFormat("en-US", {
						style: "long",
						type: "conjunction",
					}).format(props.written_by)}
				</h1>

				<hr />
			</section>
		</>
	)
}
