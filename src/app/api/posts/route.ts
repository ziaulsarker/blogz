import { NextResponse } from 'next/server'
import { readdir} from 'node:fs/promises'
import * as matter from 'gray-matter';
import { postFile, postsDir } from 'src/utils';

export async function GET(request: Request) {
  const foundPosts: any[] = []
  const postCategories: Array<string> = []; 

  try {
    const posts = await readdir(postsDir);

    posts.map(file => {
      const post = matter.read(postFile(file))
      foundPosts.push(post)
      postCategories.push(...post.data.category)
    })

    const sortedPosts =
    foundPosts?.toSorted?.((a, b) => b.data.published - a.data.published) ??
    foundPosts?.sort?.((a, b) => b.data.published - a.data.published).slice();
    
    return NextResponse.json({posts: sortedPosts, categories: postCategories, err: null}, {status: 200})
  } catch (err) {
    return NextResponse.json({err, posts: [], categories: []}, {status: 400})
  }

}