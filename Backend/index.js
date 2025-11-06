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


// list of jokes
app.get('/jokes',(req,res)=>{
  const jokes = [
  {
    id: 1,
    title: 'Programming Humor',
    content: 'Why do programmers prefer dark mode? Because light attracts bugs!'
  },
  {
    id: 2,
    title: 'Dad Joke',
    content: 'I told my computer I needed a break... it froze.'
  },
  {
    id: 3,
    title: 'Coffee Time',
    content: 'Without coffee, coding feels like compiling with 1000 errors.'
  },
  {
    id: 4,
    title: 'Debugging Life',
    content: 'Debugging is like being the detective in a crime you committed.'
  },
  {
    id: 5,
    title: 'AI Joke',
    content: 'Why did the AI go to therapy? It had too many neural issues.'
  },
  {
    id: 6,
    title: 'Frontend Joke',
    content: 'CSS developers do it with style 😎'
  },
  {
    id: 7,
    title: 'Backend Pun',
    content: 'My API just broke up with my frontend… they had communication issues.'
  },
  {
    id: 8,
    title: 'Database Drama',
    content: 'I would tell you a SQL joke, but I’d need a good “join”.'
  },
  {
    id: 9,
    title: 'Java Love',
    content: 'I like my coffee like I like my Java — strong and object-oriented ☕'
  },
  {
    id: 10,
    title: 'Bug Life',
    content: 'Found a bug in my code… named it a “feature” instead 🪲'
  }
];
  res.json(jokes);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});