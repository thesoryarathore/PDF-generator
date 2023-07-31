const PDFDocument = require('pdfkit');
const fs = require('fs');

const data = [
  { name: 'John Doe', address: '173 कृष्णा सागर कॉलोन', phone: '+1 123-456-7890' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'John Doe', address: '173 कृष्णा सागर कॉलोन', phone: '+1 123-456-7890' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'John Doe', address: '173 कृष्णा सागर कॉलोन', phone: '+1 123-456-7890' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'John Doe', address: '173 कृष्णा सागर कॉलोन', phone: '+1 123-456-7890' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'John Doe', address: '173 कृष्णा सागर कॉलोन', phone: '+1 123-456-7890' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'John Doe', address: '173 कृष्णा सागर कॉलोन', phone: '+1 123-456-7890' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue', phone: '+1 987-654-3210' },
  { name: 'John Doe', address: '173 कृष्णा सागर कॉलोन', phone: '+1 123-456-7890' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'John Doe', address: '173 कृष्णा सागर कॉलोन', phone: '+1 123-456-7890' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm A173 कृष्णा सागर 456 Elm Avenue456 Elm A456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'John Doe', address: '173 कृष्णा सागर 456 Elm Avenue456 Elm Avenue456 Elm Avenue', phone: '+1 123-456-7890' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'John Doe', address: '173 कृष्णा सागर', phone: '+1 123-456-7890' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'John Doe', address: '123 Main Street, City', phone: '+1 123-456-7890' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'John Doe', address: '123 Main Street, City', phone: '+1 123-456-7890' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  { name: 'Jane Smith', address: '456 Elm Avenue, Town', phone: '+1 987-654-3210' },
  // Add more data objects as needed
];

const itemsPerRow = 6; // Number of data items to display in a row
const rowsPerPage = 6; // Number of rows to display per page

const generatePDF = (data) => {
  const doc = new PDFDocument({ margin: 20 }); // Reduced margin

  doc.font('TiroDevanagariHindi-Regular.ttf');

  const stream = fs.createWriteStream('output.pdf');
  doc.pipe(stream);

  // Set up font and other styling
  doc.fontSize(6); // Reduced font size

  let currentPage = 1;

  for (let rowIndex = 0; rowIndex < data.length; rowIndex += itemsPerRow) {
    if ((rowIndex / itemsPerRow) % rowsPerPage === 0 && rowIndex !== 0) {
      // Start a new page for every 'rowsPerPage' rows
      doc.addPage();
      currentPage++;
    }

    for (let colIndex = 0; colIndex < itemsPerRow; colIndex++) {
      const dataIndex = rowIndex + colIndex;
      if (dataIndex >= data.length) {
        // No more data to display
        break;
      }

      const x = 20 + colIndex * 95; // Adjust the horizontal spacing between columns
      const y = 20 + ((rowIndex / itemsPerRow) % rowsPerPage) * 85; // Adjust the vertical spacing between rows

      // Add a border around the address elements with a dotted line
      doc.rect(x, y, 90, 80 ).stroke();

      // Add content inside the bordered area
      const item = data[dataIndex];
      doc.text(`Name: ${item.name}`, x + 3, y + 5, { width: 90 });
      doc.text(`Address: ${item.address}`, x + 3, y + 10, { width: 90 });
      doc.text(`Phone: ${item.phone}`, x + 3, y + 50, { width: 90 });
    }
  }

  doc.end();
  console.log('Adjusted layout PDF generated successfully!');
};

generatePDF(data);
