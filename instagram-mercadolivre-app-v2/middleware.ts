import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedInCookie = request.cookies.get('isLoggedIn');
  const { pathname } = request.nextUrl;

  const protectedRoutes = ['/perfil', '/dashboard'];
  const authRoutes = ['/login', '/registro'];

  const isAccessingProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isAccessingAuthRoute = authRoutes.some(route => pathname.startsWith(route));

  if (isAccessingProtectedRoute && !isLoggedInCookie) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirectedFrom', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAccessingAuthRoute && isLoggedInCookie) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\..*).*)',
  ],
};
