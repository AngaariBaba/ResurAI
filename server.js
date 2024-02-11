const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');

const app = express();
const port = 3000;

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle PDF file upload and perform PDF reading operation
app.post('/upload', upload.single('pdfFile'), async (req, res) => {
  console.log("entered");
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const pdfBuffer = req.file.buffer;
    const data = await pdfParse(pdfBuffer);

    // You can access the text content from 'data.text'
    console.log('PDF Content:', data.text);

    // Respond with the extracted text or any other information
    res.send(data.text);
  } catch (error) {
    console.error('Error processing PDF:', error);
    res.json({data:data.text});
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
