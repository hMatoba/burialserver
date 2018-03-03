const express = require('express');
const DbConnection = require('./util/DbConnection.js').DbConnection;

const app = express();

app.get('/foo', async (req, res) => {
  let db = await DbConnection.getConnection();
  let items = await db.collection("items").find({}).toArray();
  res.status(200).json(items).end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});