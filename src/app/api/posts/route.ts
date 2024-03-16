import { NextResponse } from 'next/server'
import { readdir} from 'node:fs/promises'
import * as matter from 'gray-matter';
import path from 'node:path';

export async function GET(request: Request) {

  const foundPosts: any[] = []

  try {
    const posts = await readdir(`${path.resolve('src/posts')}`);

    posts.map(file => {
      const post = matter.read(`src/posts/${file}`)
      foundPosts.push(post)
    })

    const sortedPosts = foundPosts.toSorted( (a, b) => b.data.published - a.data.published )

    return NextResponse.json(sortedPosts, {status: 200})

  } catch (err) {
    return NextResponse.json('opps somethig went wrong', {status: 400})
  }


}