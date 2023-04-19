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
      return NextResponse.redirect(new URL('/admin/login', request.nextUrl));
    }
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (request.nextUrl.pathname.startsWith('/dashboard/history/ticket')) {
      return NextResponse.next();
    }

    if (!accessToken) {
      return NextResponse.redirect(new URL('/auth/login', request.nextUrl));
    }

    const isAuthenticated = await fetch(`${baseURL}/user/get-info`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
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
      return NextResponse.redirect(new URL('/auth/login', request.nextUrl));
    }

    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*', '/admin/dashboard/:path*'],
};
