import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function addRowToSheet(
  sheetId: string,
  row:
    | { [header: string]: string | number | boolean }
    | (string | number | boolean)[]
) {
  const doc = new GoogleSpreadsheet(sheetId);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || 'No Email',
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || 'No Key',
  });
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  await sheet.addRow(row);
}
