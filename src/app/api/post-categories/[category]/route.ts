import matter from "gray-matter"
import { NextResponse } from "next/server"
import { postFile } from "src/utils"

export async function GET(request: Request,   { params: { category } }: { params: { category: string } }) {
  try {
    const postData = matter.read(`${postFile(category)}.mdx`)
    return NextResponse.json(postData.data.category, {status: 200})
  } catch (err) {
    return NextResponse.json({err: 'opps cant find any posts'}, {status: 400})
  }

}