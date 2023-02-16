'use client';
import DownloadPhotolessVoyagersCard from '@/containers/voyagers-test/download/DownloadPhotolessVoyagersCard';
import DownloadVoyagersCard from '@/containers/voyagers-test/download/DownloadVoyagersCard';

export default function CobaPage() {
  return (
    <>
      <DownloadVoyagersCard variant='post' />
      <DownloadPhotolessVoyagersCard />
    </>
  );
}
