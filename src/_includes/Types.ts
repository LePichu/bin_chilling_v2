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
		title?: string
		description?: string
		image?: string
		theme?: string
		url?: string
	}
	blog: boolean
	authors_db: Array<AuthorInfo>
	authors: Array<string>
	publish: string
	time: string
	supporters: SupporterData
	tags?: Array<string>
	featured?: boolean
}

export interface SpecLabsData {
	home: boolean
	children: Element
	meta: {
		title?: string
		description?: string
		image?: string
		theme?: string
	}
	url?: string
}
