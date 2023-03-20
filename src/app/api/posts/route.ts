import { NextResponse } from 'next/server'

export async function GET(request: Request) {
// Given an incoming request...
const headers = new Headers({ 'x-test': 'bitch more'})
headers.append('two-g', "geees up hop")

// And product a response with the new headers
const res =  new Response(JSON.stringify({one: "test"}), {headers});
return res;

}