export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };

type SparkleStyle = {
	top: string;
	left: string;
};

export type SparkleType = {
	id: string;
	createdAt: number;
	color: string;
	size: number;
	style: SparkleStyle;
};

export type TagType = {
	label: string;
	color?: 'primary' | 'secondary';
};

export type SocialLink = object;

export type Feature = {
	name: string;
	description: string;
	image: string;
	tags: TagType[];
};

export type Contributor = {
	login: string;
	avatar_url: string;
	html_url: string;
};

export type CacheEntry<T> = {
	data: T;
	expiresAt: number;
};

export type BlogPost = {
	tags: string[];
	keywords: string[];
	hidden: boolean;
	slug: string;
	title: string;
	date: string;
	updated: string;
	excerpt: string;
	html: string | undefined;
	readingTime: string;
	relatedPosts: BlogPost[];
	coverImage: string | undefined;
	contributorSlug: string;
	contributor: string;
	path: string;
	meta: {
		slug: string;
		title: string;
		contributor: string;
		contributorSlug: string;
		coverImage: string;
		tags?: string[];
		readingTime: string;
		excerpt: string;
		date: string;
	};
};
