const express = require("express");
const app = express()
app.use(express.json());
app.use(express.static("public"))
app.use(require("./comments/commentsRoutes"))
const port = process.env.PORT || 8431;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
