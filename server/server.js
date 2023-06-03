require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const noteRouter = require('./routers/noteRouter');

const { MONGO_URI } = process.env;
const app = express();
const PORT = 3000;

if (!MONGO_URI) throw new Error('Missing MONGO_URI environment variable.');

// Connect to the database
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'));

// Parse request body as JSON
app.use(express.json());

// Serve bundled files in the /dist folder
app.use('/', express.static(path.join(__dirname, '../dist')));
app.get('/', (req, res) => res.sendFile(__dirname, '../dist/index.html'));

// A simple endpoint to test frontend to backend connection
app.get('/hello', (req, res) => res.json('hello from the server!'));

// Route requests to /note/...
app.use('/notes', noteRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).json({ err: { message: err.message } });
});

app.listen(PORT, () => console.log(`🚀 Server is running at port ${PORT}`));
