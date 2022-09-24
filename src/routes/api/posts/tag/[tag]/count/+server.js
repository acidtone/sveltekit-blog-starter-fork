import fetchPosts from '$lib/assets/js/fetchPosts'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async ({ params }) => {
	const { tag } = params
	const options = { tag, limit: -1 }

  const { posts } = await fetchPosts(options)
		
  return json(posts.length)
}