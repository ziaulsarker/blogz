import { NextResponse } from 'next/server'
import * as matter from 'gray-matter';
import { postFile } from 'src/utils';

export async function GET(request: Request,   { params: { post } }: { params: { post: string } }) {
  try {
    const postData = matter.read(`${postFile(post)}.mdx`);
    return NextResponse.json(postData, {status: 200})

  } catch (err) {
    return NextResponse.json({err: `opps cant find post: ${post}`}, {status: 400})
  }
}