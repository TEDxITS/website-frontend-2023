import { NextRequest, NextResponse } from 'next/server';

import { baseURL } from '@/utils/api';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('tedxits2023-token')?.value;
  const refreshToken = request.cookies.get('tedxits2023-refresh-token')?.value;
  const adminAccessToken = request.cookies.get(
    'tedxits2023-admin-token'
  )?.value;
  const adminRefreshToken = request.cookies.get(
    'tedxits2023-admin-refresh-token'
  )?.value;

  if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    if (!adminAccessToken || !adminRefreshToken) {
      const response = NextResponse.rewrite(
        new URL('/admin/login', request.nextUrl)
      );
      response.headers.set('x-middleware-cache', 'no-cache'); // Disables middleware caching
      return response;
    }
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (request.nextUrl.pathname.startsWith('/dashboard/history/ticket')) {
      return NextResponse.next();
    }

    if (!accessToken) {
      const response = NextResponse.rewrite(
        new URL('/auth/login', request.nextUrl)
      );
      response.headers.set('x-middleware-cache', 'no-cache'); // Disables middleware caching
      return response;
    }

    const isAuthenticated = await fetch(`${baseURL}/user/get-info`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    })
      .then((res) => {
        if (res.status === 401) {
          return fetch(`${baseURL}/auth/refresh-token`, {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          });
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          return true;
        }
        return false;
      });

    if (!isAuthenticated) {
      const response = NextResponse.rewrite(
        new URL('/auth/login', request.nextUrl)
      );
      response.headers.set('x-middleware-cache', 'no-cache'); // Disables middleware caching
      return response;
    }
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/dashboard',
    '/dashboard/:path*',
    '/admin/dashboard',
    '/admin/dashboard/:path*',
  ],
};
