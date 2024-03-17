import { NextResponse } from 'next/server'
import { readdir} from 'node:fs/promises'
import * as matter from 'gray-matter';
import { postFile, postsDir } from 'src/utils';

export async function GET(request: Request) {
  const postCategories: Array<string> = [];  
  
  try {
    const posts = await readdir(postsDir);
    
    posts.map(file => {
      const post = matter.read(postFile(file))
      postCategories.push(...post.data.category)
    })

    return NextResponse.json([...new Set(postCategories)], {status: 200})

  } catch (err) {
    return NextResponse.json({err: 'opps cant find any posts categories'}, {status: 400})
  }
}