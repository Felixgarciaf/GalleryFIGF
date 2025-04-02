const express = require('express');
const app = express();
const routes = require("./src/routes");
const port = 3040;

routes(app);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
