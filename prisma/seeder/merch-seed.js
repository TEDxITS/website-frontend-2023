/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create some Merch items
  const merch1 = await prisma.merch.create({
    data: {
      name: 'T-shirt (Black)',
      price: 100000,
      image:
        'https://lh4.googleusercontent.com/hJW7b6EXkt8F6r8xSJ8Dh3TE9PkqKyLJXoFl2QA2sJFnJV8aSdQ_0q4LoAuzdanNxgqlWaHsDbp5Y7y2GzNP4qfRDR3O30gQva6ErYnBr8fI2dXS5FI9qOhjrN5BHJpnyw=w740',
      type: 'Normal',
    },
  });

  const merch2 = await prisma.merch.create({
    data: {
      name: 'T-shirt (White)',
      price: 100000,
      image:
        'https://lh3.googleusercontent.com/BiZk-HrdC78oSpPyZUSU1zOxTRWeIhARQG4I8nrhfw6tWN3KzvvvTycfdMcsHYufj2IFb1xU61HyvUwZTFy25zfcwm0uMteHMlqeUvLkZNCgWnmvlNCZEdg0R8L2hgOeBQ=w740',
      type: 'Normal',
    },
  });

  const merch3 = await prisma.merch.create({
    data: {
      name: 'Keychain',
      price: 100000,
      image:
        'https://lh5.googleusercontent.com/davhQtJbYafEQu41EKzq1GYaaS4lwD5HdeNZUhb6x3LxfHKZUKJXHkhMmwWe7WstLuhBOdkqqBW2jKRGt2MENkDfwT7w0lAEwNuwxooxgDdyEIlhtPUc1trqSWKKt9eQcw=w740',
      type: 'Normal',
    },
  });

  const bundleMerch = await prisma.merch.create({
    data: {
      name: 'Bundle The Survivor',
      price: 180000,
      image:
        'https://lh4.googleusercontent.com/sGOm0kH9qPGg4PrXEwibEQQbsIiHZ2FE_4v6QIg6UStYnkqgLwQG6D7cU_8ym_kVEbFnSDuJEpkKplxCZHG18lXGvLvV40oq7WhSATvKSc2FqMG5zOCtQ7KcUkm8huSAKQ=w483',
      type: 'Bundle',
    },
  });

  const bundleMerch2 = await prisma.merch.create({
    data: {
      name: 'Bundle The Opportunist',
      price: 180000,
      image:
        'https://lh4.googleusercontent.com/sGOm0kH9qPGg4PrXEwibEQQbsIiHZ2FE_4v6QIg6UStYnkqgLwQG6D7cU_8ym_kVEbFnSDuJEpkKplxCZHG18lXGvLvV40oq7WhSATvKSc2FqMG5zOCtQ7KcUkm8huSAKQ=w483',
      type: 'Bundle',
    },
  });

  // Create a MerchBundle that includes both Merch items and the bundle Merch item
  const merchBundle = await prisma.merchBundle.create({
    data: {
      merchId: bundleMerch.id,
      MerchBundleMerch: {
        create: [
          {
            merchId: merch1.id,
            quantity: 1,
          },
          {
            merchId: merch3.id,
            quantity: 1,
          },
        ],
      },
    },
  });

  const merchBundle2 = await prisma.merchBundle.create({
    data: {
      merchId: bundleMerch2.id,
      MerchBundleMerch: {
        create: [
          {
            merchId: merch2.id,
            quantity: 1,
          },
          {
            merchId: merch3.id,
            quantity: 1,
          },
        ],
      },
    },
  });

  console.log('Seeding complete');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
