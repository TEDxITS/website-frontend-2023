import { Metadata } from 'next';

import LinkRedirectContainer from '@/containers/links/LinkRedirectContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

// Uncomment to use The Server Fetch Way
// import { redirect } from 'next/navigation';
// import React from 'react';
// import ExternalRedirect from '@/components/utils/ExternalRedirect';

// import prisma from '@/utils/prisma';
// import createResponse from '@/utils/response';

// async function getUrl(short_url: string) {
//   try {
//     const result = await prisma.url.findUnique({
//       where: {
//         short_url: short_url,
//       },
//     });
//     if (result) {
//       return createResponse(200, 'The url retrieved successfully', result);
//     }
//     return createResponse(
//       404,
//       'There is no url that matched with the short url',
//       null
//     );
//   } catch (e) {
//     return createResponse(500, 'Internal Server Error', null);
//   }
// }

// export default async function LinkRedirectPage({
//   params,
// }: {
//   params: { short_url: string };
// }) {
//   const data = await getUrl(params.short_url);

//   if (data.data && data.data.url) {
//     return <ExternalRedirect url={data.data.url} />;
//   }
//   redirect('/links');
// }

const metadataObject = generateTemplateMetadata('Link Shortener', '', '/');
export const metadata: Metadata = {
  ...metadataObject,
};

// The Client Way
export default function LinkRedirectPage({
  params,
}: {
  params: { short_url: string };
}) {
  return <LinkRedirectContainer params={params} />;
}
