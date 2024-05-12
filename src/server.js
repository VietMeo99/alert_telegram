require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import cronJob from "./cron/cronTask.js";

// "repository": {
//    "type": "git",
//    "url": "git+https://github.com/haryphamdev/telegram-bot-push-notification.git"
// },

let app = express();

//config body-parser to post data to server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view Engine
configViewEngine(app);

//init all web routes
initWebRoutes(app);

cronJob.job.start();

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running at the port ${port}`);
});
