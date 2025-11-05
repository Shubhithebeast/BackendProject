const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/status', (req, res) => {
  res.json({ status: 'OK' });
})  

app.get('/login', (req, res) => {
  res.send('Login Page');
})  
app.get('/logout', (req, res) => {
  res.send('Logout Page');
})  

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});