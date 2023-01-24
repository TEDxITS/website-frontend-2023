'use client';
import React from 'react';

// redirect to external links using this client component because next/navigation redirect() can't work with external links
// for more information see this issues https://github.com/vercel/next.js/issues/43605
export default function ExternalRedirect({ url }: { url: string }) {
  React.useEffect(() => {
    location.replace(url);
  });
  return null;
}
