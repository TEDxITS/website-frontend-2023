/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

// Make sure the font exists in the specified path:
const interBoldFont = fetch(
  new URL('../../../public/fonts/inter/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());
const interRegularFont = fetch(
  new URL('../../../public/fonts/inter/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  // Populating open graph image with values from search params
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title');
  const description = searchParams.get('description');

  // using fonts
  const interRegular = await interRegularFont;
  //const interSemibold = await interSemiboldFont;
  const interBold = await interBoldFont;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          backgroundColor: 'hsla(0,2%,10%,1)',
          width: '100%',
          height: '100%',
          paddingTop: 0,
          paddingLeft: 100,
          paddingRight: 100,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <img
          alt='logo'
          src='https://res.cloudinary.com/dsxv92ccr/image/upload/v1673280818/tedxits-white_p5u6jo.png'
          width='166'
          height='69'
        />
        <h1
          style={{
            color: 'white',
            fontSize: 70,
            paddingLeft: 10,
            paddingTop: 50,
          }}
        >
          {title} | TEDxITS 2023
        </h1>
        <p style={{ color: 'silver', fontSize: 25, fontWeight: 400 }}>
          {description}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Inter',
          data: interBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
