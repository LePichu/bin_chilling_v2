export type AuthorInfo = {
	name: string
	pfp: string
	desc: string
	pronouns: string
}

export type SupporterData = {
	"discord": Array<string>
	"patreon": Array<string>
}

export interface Data {
	children: Element
	meta: {
		title: string | undefined
		description: string | undefined
		image: string | undefined
		theme: string | undefined
	}
	blog: boolean
	authors_db: Array<AuthorInfo>
	authors: Array<string>
	publish: string
	time: string
	supporters: SupporterData
}
