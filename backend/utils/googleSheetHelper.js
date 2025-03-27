const sheets = require('../config/googleSheet');

const writeToSheet = async (sheetId, tabName, rowData) => {
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${tabName}!A1`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [rowData],
    },
  });
};

module.exports = writeToSheet;
