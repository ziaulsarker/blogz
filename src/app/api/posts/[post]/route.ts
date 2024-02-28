import { NextResponse } from 'next/server'
import * as matter from 'gray-matter';

export async function GET(request: Request,   { params: { post } }: { params: { post: string } }) {

  try {
    const postData = matter.read(`src/posts/${post}.mdx`)
    return NextResponse.json(postData, {status: 200})

  } catch (err) {
    return NextResponse.json({err: 'opps cant find any posts'}, {status: 400})
  }

}