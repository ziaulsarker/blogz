import { NextResponse } from 'next/server'
import { readdir} from 'node:fs/promises'
import * as matter from 'gray-matter';
import { postFile, postsDir } from 'src/utils';

export async function GET(request: Request) {
  const foundPosts: any[] = []

  try {
    const posts = await readdir(postsDir);

    console.log('posts', {posts, postsDir})

    posts.map(file => {
      const post = matter.read(postFile(file))
      foundPosts.push(post)
    })

    const sortedPosts = foundPosts.toSorted( (a, b) => b.data.published - a.data.published )
    return NextResponse.json(sortedPosts, {status: 200})
  } catch (err) {
    return NextResponse.json({err}, {status: 400})
  }

}