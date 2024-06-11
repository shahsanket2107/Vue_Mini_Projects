import express from 'express';
import { readFile } from 'fs';

const app = express();
const PORT = 3000;

app.get('/file/data', (req, res) => {
  readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      res.send('500: Internal Server Error');
      return;
    }
    res.send(`Data read from the file: ${data}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
