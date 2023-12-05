import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

const exportToExcel = async (filteredTable) => {
  if (filteredTable.length === 0) {
    // No data to export
    return;
  }

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet 1');

  // Add headers to the worksheet
  const headers = [
    { header: 'Name', key: 'Name', width: 20 },
    { header: 'Code', key: 'Code', width: 15 },
    { header: 'Vat', key: 'Vat', width: 15 },
    { header: 'Tax', key: 'Tax', width: 15 },
    { header: 'Batchable', key: 'Batchable', width: 15 },


    // Add other headers based on your data structure
  ];

  worksheet.columns = headers;

  // Add data to the worksheet
  filteredTable.forEach((row) => {
    worksheet.addRow({
      Name: row.Name,
      Code: row.Code,
      // Add other columns based on your data structure
    });
  });

  // Generate a timestamp for the filename
  const today = new Date();
  const timestamp =
    today.toISOString().replace(/:/g, "-").split("T")[0] +
    "_" +
    today.toLocaleTimeString().split(" ").join("_");
  const filename = `Export_${timestamp}.xlsx`;

  try {
    // Write the workbook to a buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // Create a Blob from the Excel buffer
    const excelBlob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    // Use FileSaver to save the Blob as a file
    saveAs(excelBlob, filename);
  } catch (error) {
    console.error('Error exporting to Excel:', error);
    // Handle any errors during export
    // You might want to show an error message to the user
  }
};

export default exportToExcel;
