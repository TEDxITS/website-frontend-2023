/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const anthropocene = [
  {
    src: 'https://drive.google.com/uc?export=view&id=1UxBG7Dawi15AeuHoBNmjhYoXGVBjvY1r',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1UxBG7Dawi15AeuHoBNmjhYoXGVBjvY1r',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1664kWIzlIjfxXqaX53_WkmM-o9u57_Vi',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1664kWIzlIjfxXqaX53_WkmM-o9u57_Vi',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=19rhefjOLmGZR4sH6eklerZB9qBkscmki',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=19rhefjOLmGZR4sH6eklerZB9qBkscmki',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=17jFd8DKOJej-pKVKRHLlNSkgRrtGM9Ty',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=17jFd8DKOJej-pKVKRHLlNSkgRrtGM9Ty',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1ujxjQmD6Bg9O13WPEoPyVvDy1M-lyP77',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1ujxjQmD6Bg9O13WPEoPyVvDy1M-lyP77',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=12bCubvGyQ9VJRz0BBhhCnXbGLho369kh',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=12bCubvGyQ9VJRz0BBhhCnXbGLho369kh',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=131EOAlC83FDqeZRphDIe9kxLppqJVDXB',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=131EOAlC83FDqeZRphDIe9kxLppqJVDXB',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1lAVJKvEfE_G7h-1yJpwI8HLRMNingi8Q',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1lAVJKvEfE_G7h-1yJpwI8HLRMNingi8Q',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1p09vgnNL0wj1_HQieKR3SWHGnNZI8q2D',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1p09vgnNL0wj1_HQieKR3SWHGnNZI8q2D',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=114SBJa58t8Pj_PRPSP2cp2Pd3eB5YajD',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=114SBJa58t8Pj_PRPSP2cp2Pd3eB5YajD',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=16WSUPts9Md836W2qN1keT4hJlR0UY0pO',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=16WSUPts9Md836W2qN1keT4hJlR0UY0pO',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1ENbr3iC7c9l5ZWAM-h91FwBOVx50K1uD',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1ENbr3iC7c9l5ZWAM-h91FwBOVx50K1uD',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1l9hyo53iqM5cSIU1cNC2QI02U3VuC5-8',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1l9hyo53iqM5cSIU1cNC2QI02U3VuC5-8',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1Ry5wHH-HTaGkZcLQwEBPwRVGUnNz_jNZ',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1Ry5wHH-HTaGkZcLQwEBPwRVGUnNz_jNZ',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1kfrxlBQS7MeyH6AIsoYTds2GiXIaexuC',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1kfrxlBQS7MeyH6AIsoYTds2GiXIaexuC',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1Z7keTMWMne28rOuCJNqDvohFIUIumZDW',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1Z7keTMWMne28rOuCJNqDvohFIUIumZDW',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1rARU2DCnpmEWv3XYfCeD_nMG0zOIre0Y',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1rARU2DCnpmEWv3XYfCeD_nMG0zOIre0Y',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1v-a2dIwymXcVCaww7kjngqboASJUIPDM',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1v-a2dIwymXcVCaww7kjngqboASJUIPDM',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1R1q-OaNE1HPZVcankDv6687-XfYwj2-b',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1R1q-OaNE1HPZVcankDv6687-XfYwj2-b',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=15Ri8Fwjzn3Tym-TZx7fn1vNDMgYpIlrX',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=15Ri8Fwjzn3Tym-TZx7fn1vNDMgYpIlrX',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1_zGa6iQaRlycgKp1e5s-5VMCwYRZl-Nx',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1_zGa6iQaRlycgKp1e5s-5VMCwYRZl-Nx',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=14A5RFcWsRwdq4rMTzgNJWtRX7GfkULYm',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=14A5RFcWsRwdq4rMTzgNJWtRX7GfkULYm',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=109zgKhhJVGhgA-83MCKceNr77Twf2xJF',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=109zgKhhJVGhgA-83MCKceNr77Twf2xJF',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=13iTED4hWOXVkm_WBmrKl30JNJwntLkC8',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=13iTED4hWOXVkm_WBmrKl30JNJwntLkC8',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1dc_IQT3ECuZUEV-jwJUkTnghcaxPkDSV',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1dc_IQT3ECuZUEV-jwJUkTnghcaxPkDSV',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1bR3Ds64MjI2_dQB5nuY5qioXWJ0pkngB',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1bR3Ds64MjI2_dQB5nuY5qioXWJ0pkngB',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1VM0UevuQGfqV9OcIO6asFMcuLMMZ7ES6',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1VM0UevuQGfqV9OcIO6asFMcuLMMZ7ES6',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1wDE5kwEv6EQd2PBkBvFklcT1YeLfdEdG',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1wDE5kwEv6EQd2PBkBvFklcT1YeLfdEdG',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1_1AsN2Y0f71IAweHy7vHnDj3sOnAkpa9',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1_1AsN2Y0f71IAweHy7vHnDj3sOnAkpa9',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1wDd9s9gcRDd_tGyxJGjLGJ2WpQ05iXb_',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1wDd9s9gcRDd_tGyxJGjLGJ2WpQ05iXb_',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1IL0ZhiUYdGiZHSp37qOoJiW0BV6K46Bb',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1IL0ZhiUYdGiZHSp37qOoJiW0BV6K46Bb',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=14MGuG0q6P8s7bkYiveeSo_j6aMjuEeuo',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=14MGuG0q6P8s7bkYiveeSo_j6aMjuEeuo',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1v5ZD6QM1F7tQIK7iwOYkXwygRNcsgZ8n',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1v5ZD6QM1F7tQIK7iwOYkXwygRNcsgZ8n',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1-p5ZcQOAi-6mYnOcvMThmTDu9BufRM5B',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1-p5ZcQOAi-6mYnOcvMThmTDu9BufRM5B',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1-Dkn3_1IKm9OiWNJNsY3Sfxb3zc5aU8y',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1-Dkn3_1IKm9OiWNJNsY3Sfxb3zc5aU8y',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1aAjftDcfidBiw9ELFA0o-KxScUdMa5C2',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1aAjftDcfidBiw9ELFA0o-KxScUdMa5C2',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1wUb6Q7tZgDgPP-xcPBJ518RtE-9HD1YV',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1wUb6Q7tZgDgPP-xcPBJ518RtE-9HD1YV',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1WT1Yyl3Z1iww8e6DwdJosXSYVBS4Eghc',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1WT1Yyl3Z1iww8e6DwdJosXSYVBS4Eghc',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=13l97zPuYh7xDy6ApYJ_3DIsMvE_XLOyy',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=13l97zPuYh7xDy6ApYJ_3DIsMvE_XLOyy',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1ryweL0Bf7oFM3iLx8d8EFK7QgecBU_gw',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1ryweL0Bf7oFM3iLx8d8EFK7QgecBU_gw',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1d0dPOkOr7X-LvQFzp9TWWJCdXy3d0jly',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1d0dPOkOr7X-LvQFzp9TWWJCdXy3d0jly',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1-jQGLQt-9GO1lNLgdV1ePfXnz2KplZPa',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1-jQGLQt-9GO1lNLgdV1ePfXnz2KplZPa',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1wRiQm2AxZdVEY_N8H9FAuBk0XN1FJ4IA',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1wRiQm2AxZdVEY_N8H9FAuBk0XN1FJ4IA',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1yHQ7exJwyrDyJVCQReJYzB2STcr0EryT',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1yHQ7exJwyrDyJVCQReJYzB2STcr0EryT',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1sPUd7RnXtA2SAmjr3sGP14Gt1kIB8yu-',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1sPUd7RnXtA2SAmjr3sGP14Gt1kIB8yu-',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1YoONKDFlNAquX8NXwpaYirlXVwUHYeEE',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1YoONKDFlNAquX8NXwpaYirlXVwUHYeEE',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1eg7y1I1A2102tSWdeuTGBN1TqoRLRj5R',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1eg7y1I1A2102tSWdeuTGBN1TqoRLRj5R',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1q4tyHw5Kg7vJe-G1QVHC0h34mhQH6Aid',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1q4tyHw5Kg7vJe-G1QVHC0h34mhQH6Aid',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1DKPa_qslvfnVJvnu4A3DA3v9szrH6Uae',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1DKPa_qslvfnVJvnu4A3DA3v9szrH6Uae',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1EXpzkkMHUFziYV2_6rTUqSyM9M41OH8j',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1EXpzkkMHUFziYV2_6rTUqSyM9M41OH8j',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1FyuBKDS8hnSo52aW3Gdj1--c5lKC5Z09',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1FyuBKDS8hnSo52aW3Gdj1--c5lKC5Z09',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1ttsztFmGZP97HPmt070re7WxkcOT2k4r',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1ttsztFmGZP97HPmt070re7WxkcOT2k4r',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1qz8twuyH0vdaNz1rm-Nvolv0B_5NB8zv',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1qz8twuyH0vdaNz1rm-Nvolv0B_5NB8zv',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1WrlM5N9Qx2ovW9Dg6vuhfbjbw0AyKI6n',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1WrlM5N9Qx2ovW9Dg6vuhfbjbw0AyKI6n',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1quVa80_1Uv6ze20VMKjwL-WJw8a_MNnt',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1quVa80_1Uv6ze20VMKjwL-WJw8a_MNnt',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1W_phsxbq4DFkZAWgUiF7eqIqG9OZe2XD',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1W_phsxbq4DFkZAWgUiF7eqIqG9OZe2XD',
    type: 'photo',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1efYhf17keRDp6YieE3s1fv6nLru2Qzv8',
    caption: '',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1efYhf17keRDp6YieE3s1fv6nLru2Qzv8',
    type: 'photo',
  },
];

const load = async () => {
  try {
    await prisma.anthropocene.createMany({
      data: anthropocene,
    });
    console.log('Anthropocene data loaded');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
load();
