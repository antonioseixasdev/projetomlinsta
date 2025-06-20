import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Use .value para acessar o valor do cookie no Edge Runtime
  const isLoggedInCookie = request.cookies.get('isLoggedIn')?.value;
  const { pathname } = request.nextUrl;

  const protectedRoutes = ['/perfil', '/dashboard'];
  const authRoutes = ['/login', '/registro'];

  const isAccessingProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isAccessingAuthRoute = authRoutes.some(route => pathname.startsWith(route));

  if (isAccessingProtectedRoute && !isLoggedInCookie) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/login';
    loginUrl.searchParams.set('redirectedFrom', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAccessingAuthRoute && isLoggedInCookie) {
    const dashboardUrl = request.nextUrl.clone();
    dashboardUrl.pathname = '/dashboard';
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\..*).*)',
  ],
};
