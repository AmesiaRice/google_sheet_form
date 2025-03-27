const writeToSheet = require("../utils/googleSheetHelper");

exports.submitFormData = async (req, res) => {
  const { name, email, message } = req.body;

  const sheetId = process.env.SHEET_ID;  // ⬅️ .env me sheet ID daalna
  const tabName = "Form1";               // ⬅️ Jisme likhna hai

  try {
    await writeToSheet(sheetId, tabName, [name, email, message]);
    res.status(200).json({ success: true, message: "Data written to Google Sheet" });
  } catch (error) {
    console.error("Google Sheet Error:", error);
    res.status(500).json({ error: "Failed to write to Google Sheet" });
  }
};
