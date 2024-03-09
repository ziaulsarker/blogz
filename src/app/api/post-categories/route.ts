import { NextResponse } from 'next/server'
import { readdir} from 'node:fs/promises'
import * as matter from 'gray-matter';

export async function GET(request: Request) {

const postCategories = new Set<string>();
  try {
    const posts = await readdir('src/posts');
    posts.map(file => {
      const post = matter.read(`src/posts/${file}`)
      postCategories.add(post.data.category)
    })

    return NextResponse.json([...postCategories].flat(), {status: 200})

  } catch (err) {
    return NextResponse.json('opps somethig went wrong', {status: 400})
  }


}