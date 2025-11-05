const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;


const randomData={
  location: 'New York',
  temperature: '22°C',
  condition: 'Sunny',
  id: 12345,
  users: [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ],
  products: [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 499.99 },
    { id: 3, name: 'Tablet', price: 299.99 }
  ]
}


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/data', (req, res) => {
  res.json(randomData);
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