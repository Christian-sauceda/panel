import app from "./app";
require("dotenv").config();

let port = process.env.PORT;
app.listen(port);

var cron = require('node-cron');


  cron.schedule('9 16 * * 4', () => {
    console.log('Running a job at 01:00 at America/Tegucigalpa timezone');
  }, {
    scheduled: true,
    timezone: "America/Tegucigalpa"
  });

console.log(`Server is running on http://localhost:${port}`);