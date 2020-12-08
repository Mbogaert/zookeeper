const express = require('express');

// instantiate the server (create the server)
const app = express();

// makes the server listen
app.listen(3001, () => {
    console.log('API server now on port 3001!;')
});