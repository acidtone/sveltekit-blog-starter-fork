import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ params, url }) => {
	const tag = params.tag
	const options = { tag }
	const { posts } = await fetchPosts(options)
	const res = await fetch(`${url.origin}/api/posts/tag/${tag}/count`)
	const total = await res.json()

	return { 
		posts,
		tag,
		total
	}
}
