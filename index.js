// import express, { static } from 'express';
// import { resolve, join } from 'path';

const express = require('express');
const path = require('path');

const app = express();

const root = path.resolve(__dirname, '..');

// app.get("/", (req, res) =>  {
//     // res.send('<h1>Hello</h1>');
//     res.sendFile(path.join(root, 'html', 'home.html'));
// });

app.use(express.static(path.join(root, 'html')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${path.join(root, 'html')}`));