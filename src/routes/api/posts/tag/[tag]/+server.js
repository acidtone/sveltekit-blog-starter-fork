import fetchPosts from '$lib/assets/js/fetchPosts'
import { error, json } from '@sveltejs/kit'

export const prerender = true

export const GET = async ({ params }) => {
	const { tag } = params
  console.log(tag)
	try {
    console.log(tag)
		const { posts } = await fetchPosts({ tag })
		
		return json(posts)
	}

	catch(err) {
		throw error(500, err)
	}
}