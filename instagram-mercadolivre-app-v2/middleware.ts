import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('isLoggedIn')?.value === 'true';

  // Rotas protegidas
  const protectedRoutes = ['/dashboard', '/perfil'];

  if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

// Aplica o middleware apenas nas rotas protegidas
export const config = {
  matcher: ['/dashboard/:path*', '/perfil/:path*'],
};
