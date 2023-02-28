export const getMetadataItems = (
  templateTitle = '',
  templateDescription = '',
  slug = ''
) => {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://www.tedxits.org'
      : 'http://localhost:3000';
  const pathname = baseUrl + slug;
  const title = templateTitle
    ? `${templateTitle} | TEDxITS 2023`
    : 'TEDxITS 2023';
  const description = templateDescription
    ? `${templateDescription} 'TEDxITS paves the way to ideas discussion from various perspectives in enjoyable delivery method across Institut Teknologi Sepuluh Nopember (ITS) and Surabaya.`
    : 'TEDxITS paves the way to ideas discussion from various perspectives in enjoyable delivery method across Institut Teknologi Sepuluh Nopember (ITS) and Surabaya.';
  const ogUrl = new URL(
    baseUrl + `/api/og?title=${title}&description=${description}`
  ).href;

  return {
    title,
    templateTitle,
    description,
    pathname,
    ogUrl,
  };
};

export const generateTemplateMetadata = (
  templateTitle = '',
  templateDescription = '',
  slug = ''
) => {
  const metadataItems = getMetadataItems(
    templateTitle,
    templateDescription,
    slug
  );
  return {
    title: metadataItems.title,
    alternates: {
      canonical: metadataItems.pathname,
    },
    openGraph: {
      url: metadataItems.pathname,
      images: metadataItems.ogUrl,
    },
    twitter: {
      images: metadataItems.ogUrl,
    },
  };
};
