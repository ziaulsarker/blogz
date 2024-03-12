import { NextResponse } from 'next/server'
import { readdir} from 'node:fs/promises'
import * as matter from 'gray-matter';

export async function GET(request: Request) {

const postCategories: Array<string> = [];
  try {
    const posts = await readdir('src/posts');
    
    posts.map(file => {
      const post = matter.read(`src/posts/${file}`)
      postCategories.push(...post.data.category)
    })

    return NextResponse.json([...new Set(postCategories)], {status: 200})

  } catch (err) {
    return NextResponse.json('opps somethig went wrong', {status: 400})
  }
}