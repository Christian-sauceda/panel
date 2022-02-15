import express from "express";
const cors = require("cors");
import morgan from "morgan";
import pkg from "../package.json";
import cataudio from "./routes/maintenance.routes/cataudio.routes";
import catcategory from "./routes/maintenance.routes/catcategory.routes";
import catepgchannel from "./routes/maintenance.routes/catepgchannel.routes";
import catformatvideo from "./routes/maintenance.routes/catformatvideo.routes";
import catplataform from "./routes/maintenance.routes/catplataform.routes";
import catquality from "./routes/maintenance.routes/catquality.routes";
import catypecontent from "./routes/maintenance.routes/catypecontent.routes";
import catypeserver from "./routes/maintenance.routes/catypeserver.routes";
import mtmoviees from "./routes/movie.routes/mtmoviees.routes";
import mtmovieen from "./routes/movie.routes/mtmovieen.routes";
import mtmovieadult from "./routes/movie.routes/mtmovieadult.routes";
import mttvshowsen from "./routes/tvshows.routes/mttvshowsen.routes";
import mttvshowses from "./routes/tvshows.routes/mttvshowses.routes";
import mttvshowschapter from "./routes/tvshowschapter.routes/mttvshowschapter.routes";
import sysignup from "./routes/auth.routes/auth.routes";
import tvlivees from "./routes/tvlive.routes/tvlivees.routes";
import tvliveen from "./routes/tvlive.routes/tvliveen.routes";
import tvliveinter from "./routes/tvlive.routes/tvliveinter.routes";
const useMiddleware = require("./middlewares/user.middleware");
const cookieParser = require('cookie-parser')

const app = express();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json());

app.use(cookieParser());

app.get("/", useMiddleware.isLoggedIn, (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
  });
});

// MAINTENANCE
app.use('/cataudio', useMiddleware.isLoggedIn, cataudio);
app.use('/catcategory', useMiddleware.isLoggedIn, catcategory);
app.use('/catepgchannel', useMiddleware.isLoggedIn, catepgchannel);
app.use('/catformatvideo', useMiddleware.isLoggedIn, catformatvideo);
app.use('/catplataform', useMiddleware.isLoggedIn, catplataform);
app.use('/catquality', useMiddleware.isLoggedIn, catquality);
app.use('/catypecontent', useMiddleware.isLoggedIn, catypecontent);
app.use('/catypeserver', useMiddleware.isLoggedIn, catypeserver);

// MOVIE
app.use('/mtmovie/es', useMiddleware.isLoggedIn, mtmoviees);
app.use('/mtmovie/en', useMiddleware.isLoggedIn, mtmovieen);
app.use('/mtmovie/adult', useMiddleware.isLoggedIn, mtmovieadult);

// TVSHOWS
app.use('/mttvshows/en', useMiddleware.isLoggedIn, mttvshowsen);
app.use('/mttvshows/es', useMiddleware.isLoggedIn, mttvshowses);
app.use('/mttvshowschapter', useMiddleware.isLoggedIn, mttvshowschapter);

// TV LIVE
app.use('/tvlive/es', useMiddleware.isLoggedIn, tvlivees);
app.use('/tvlive/en', useMiddleware.isLoggedIn, tvliveen);
app.use('/tvlive/inter', useMiddleware.isLoggedIn, tvliveinter);

// AUTH
app.use('/', sysignup);

export default app;