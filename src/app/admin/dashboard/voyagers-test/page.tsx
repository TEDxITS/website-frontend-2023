import type { Metadata } from 'next';

import VoyagersChartContainer from '@/containers/admin/voyagers-test/VoyagersChartContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Voyagers Test Result',
  '',
  '/admin/dashboard/voyagers-test'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function VoyagersTestAdminPage() {
  return <VoyagersChartContainer />;
}
