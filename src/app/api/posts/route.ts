import { NextResponse } from 'next/server'
import { readdir} from 'node:fs/promises'
import * as matter from 'gray-matter';

export async function GET(request: Request) {

  const foundPosts: any[] = []

  try {
    const posts = await readdir('src/posts/');

    posts.map(file => {
      const post = matter.read(`src/posts/${file}`)
      foundPosts.push(post)
    })

    const sortedPosts = foundPosts.toSorted( (a, b) => b.data.published - a.data.published )

    return NextResponse.json(sortedPosts, {status: 200})

  } catch (err) {
    return NextResponse.json({err}, {status: 400})
  }


}