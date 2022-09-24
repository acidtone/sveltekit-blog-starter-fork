export const load = async ({ url }) => {
	const res = await fetch(`${url.origin}/api/posts.json`)
	let posts = await res.json()

	let uniqueTags = {}

	posts.forEach(post => {
		post.tags.forEach(tag => {
			if (uniqueTags.hasOwnProperty(tag)) {
				uniqueTags[tag].count += 1
			} else {
				uniqueTags[tag] = {
					title: tag,
					count: 1
				}
			}
		})
	})

	const sortedUniqueTag = 
		Object.values(uniqueTags)
			.sort((a, b) => a.title > b.title)

	return { 
		uniqueTags: sortedUniqueTag
	}
}
