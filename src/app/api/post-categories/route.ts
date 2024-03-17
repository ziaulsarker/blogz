import { NextResponse } from 'next/server'
import { readdir} from 'node:fs/promises'
import * as matter from 'gray-matter';
import { postFile, postsDir } from 'src/utils';

export async function GET(request: Request) {

  const postCategories: Array<string> = [];
  const foundPosts: any[] = []
  
  try {
    const posts = await readdir(postsDir);
    
    posts.map(file => {
      const post = matter.read(postFile(file))
      foundPosts.push(post)
      postCategories.push(...post.data.category)
    })

    const sortedPosts = foundPosts.toSorted( (a, b) => b.data.published - a.data.published )

    return NextResponse.json({categories: [...new Set(postCategories)], posts: sortedPosts}, {status: 200})

  } catch (err) {
    return NextResponse.json({err: 'opps cant find any posts categories'}, {status: 400})
  }
}