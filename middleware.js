import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //return NextResponse.redirect(new URL('/home', request.url))
  const path = request.nextUrl.pathname;
  const ispublicpath = path == '/signup' ;
  const token = request.cookies.get('token')?.value || '';

  if (ispublicpath && token=="1zHwn6wJ7nStOzY7gADxLqVa"){
    return NextResponse.redirect(new URL('/dashboard' , request.nextUrl))
  }
  if (!ispublicpath && !token){
    return NextResponse.redirect(new URL('/signup' , request.nextUrl))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/signup','/dashboard'],
}