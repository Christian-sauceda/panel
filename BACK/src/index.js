import app from "./app";
require("dotenv").config();

let port = process.env.PORT;
app.listen(port);

console.log(`Server is running on http://localhost:${port}`);