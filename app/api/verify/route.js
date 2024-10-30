import { NextResponse } from 'next/server';
import { parse } from 'cookie';

export async function GET(req) {
  const cookies = req.headers.get('cookie') ? parse(req.headers.get('cookie')) : {};
  const token = cookies.token;

  if (token === "1zHwn6wJ7nStOzY7gADxLqVa") {
    return NextResponse.json({ verified: true });
  } else {
    return NextResponse.json({ verified: false });
  }
}