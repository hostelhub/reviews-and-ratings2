const express = require('express');
const app = express();
const port = 7000;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`Server is listening on port ${port}`));