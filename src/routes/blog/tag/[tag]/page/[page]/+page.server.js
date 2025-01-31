import { redirect } from '@sveltejs/kit'
import { postsPerPage } from '$lib/config'
import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ url, params }) => {
  const page = params.page ? params.page : 1
  const { tag } = params

  // Prevents duplication of page 1 as the index page
  if (page <= 1) {
    throw redirect(301, `/blog/tag/${tag}`);
  }
  
  let offset = (page * postsPerPage) - postsPerPage

  const totalPostsRes = await fetch(`${url.origin}/api/posts/count`)
  const total = await totalPostsRes.json()
  const { posts } = await fetchPosts({ offset, page })

  return {
    posts,
    page,
    tag,
    totalPosts: total 
  }
}
