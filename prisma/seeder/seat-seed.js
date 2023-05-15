/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const columns = Array.from({ length: 21 }, (_, i) => (i + 1).toString());
  const seats = rows.flatMap((row) =>
    columns.map((column) => ({ name: row + column }))
  );

  for (const seat of seats) {
    await prisma.seat.create({ data: seat });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
