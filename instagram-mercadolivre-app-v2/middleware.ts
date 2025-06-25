import { NextRequest, NextResponse } from 'next/server';

// Middleware desativado para desenvolvimento
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// export const config = {
//   matcher: ['/dashboard/:path*', '/perfil/:path*'],
// };