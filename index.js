const express = require('express');

const app = express();

app.get('/',(req, res)=> {
res.send('Hello Github Pages'));
});

app.listen(3000);
