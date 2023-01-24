import React from 'react';

import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

export default function ToolsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RandomStarfieldContainer>{children}</RandomStarfieldContainer>;
}
