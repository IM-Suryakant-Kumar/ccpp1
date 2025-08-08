import { NextResponse, type NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(request.url)
  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ["/home", "/explore", "/profile", "/settings"],
}