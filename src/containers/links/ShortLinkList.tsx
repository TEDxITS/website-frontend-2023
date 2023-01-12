import { headers } from 'next/headers';
import { unstable_getServerSession } from 'next-auth';

import {
  SignInButton,
  SignOutButton,
} from '@/containers/links/ShortLinkAuthButton';
import ShortLinkCard from '@/containers/links/ShortLinkCard';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

async function getUrlByUserId(userId: string) {
  try {
    const result = await prisma.url.findMany({
      where: {
        userId: userId,
      },
    });
    if (result.length > 0) {
      return createResponse(
        200,
        'The short links retrieved successfully',
        result
      );
    }
    return createResponse(404, 'The user did not have any short link', null);
  } catch (e) {
    return createResponse(
      500,
      'There is error retrieving the short links',
      null
    );
  }
}

export default async function ShortLinkList() {
  const session = await unstable_getServerSession(authOptions);
  const urlByUserId = await getUrlByUserId(
    session && session.user ? session.user.id : ''
  );
  // get location from headers in server side
  const headersList = headers();
  const host = headersList.get('host');
  const fullLocation =
    (process.env.NODE_ENV === 'development' ? 'http://' : 'https://') +
    host +
    '/links/';

  if (session) {
    return (
      <div>
        <h3>Your link</h3>
        <SignOutButton />
        {urlByUserId && urlByUserId.data
          ? urlByUserId.data.length > 0
            ? urlByUserId.data?.map(({ id, url, short_url }) => (
                <ShortLinkCard
                  key={id}
                  id={id}
                  url={url}
                  short_url={fullLocation + short_url}
                />
              ))
            : urlByUserId.message
          : urlByUserId?.message}
      </div>
    );
  }

  return (
    <div>
      <h3>Sign in to save your short link</h3>
      <SignInButton />
    </div>
  );
}
