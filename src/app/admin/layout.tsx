import React from 'react';

import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RandomStarfieldContainer>{children}</RandomStarfieldContainer>;
}
