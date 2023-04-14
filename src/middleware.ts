import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('tedxits2023-token');
  const refreshToken = request.cookies.get('tedxits2023-refresh-token');
  if (!accessToken) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  const isAuthenticated = await fetch(
    'https://us-central1-tedxits2023.cloudfunctions.net/isAuthenticated',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
    .then((res) => {
      if (res.status === 401) {
        return fetch(
          'https://us-central1-tedxits2023.cloudfunctions.net/refreshToken',
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        ).then((res) => {
          if (res.status === 200) {
            return res.json().then((data) => {
              request.cookies.set('tedxits2023-token', data.token);
              return true;
            });
          } else {
            return false;
          }
        });
      }
      return true;
    })
    .catch(() => {
      return false;
    });

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  // Temporary workaround because the api is not ready yet
  matcher: '/dashboards/:path*',
};
