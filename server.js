const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  console.log('Contact form submission:', { name, email, phone, subject, message });
  res.json({ success: true, message: 'Thank you! Your message has been received.' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Portfolio server is running at http://localhost:${PORT}`);
});
