import { NextResponse } from 'next/server'
import * as matter from 'gray-matter';
import { postFile } from 'src/utils';


export async function GET(request: Request,   { params }: { params: Promise<{ post: string }> }) {
  const { post } = await params
  try {
    const postData = matter.read(`${postFile(post)}.mdx`);
    return NextResponse.json({postData, err: null}, {status: 200})

  } catch (err) {
    return NextResponse.json({err: `opps cant find post: ${post}`, postData: []}, {status: 400})
  }
}