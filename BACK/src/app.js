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
import mtevent from "./routes/event.routes/mtevent.routes";
import mtmovieadult from "./routes/movie.routes/mtmovieadult.routes";
import mttvshowsen from "./routes/tvshows.routes/mttvshowsen.routes";
import mttvshowses from "./routes/tvshows.routes/mttvshowses.routes";
import mttvshowschapter from "./routes/tvshowschapter.routes/mttvshowschapter.routes";
import sysignup from "./routes/auth.routes/auth.routes";
import tvlivees from "./routes/tvlive.routes/tvlivees.routes";
import tvliveen from "./routes/tvlive.routes/tvliveen.routes";
import tvliveinter from "./routes/tvlive.routes/tvliveinter.routes";
import checkAuth from "./middlewares/user.middleware.js";
const cookieParser = require('cookie-parser')

const app = express();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json());

app.use(cookieParser());

//dominios permitidos por variables de entorno
const dominiosPermitidos = ["http://localhost:3000", "http://localhost:3001"];

const corsOptions = {
  origin: function(origin, callback) {
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      //el origen del request es permitido
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  }
}

app.use(cors(corsOptions));

app.get("/", checkAuth, (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
  });
});

// MAINTENANCE
app.use('/cataudio', checkAuth, cataudio);
app.use('/catcategory', checkAuth, catcategory);
app.use('/catepgchannel', checkAuth, catepgchannel);
app.use('/catformatvideo', checkAuth, catformatvideo);
app.use('/catplataform', checkAuth, catplataform);
app.use('/catquality', checkAuth, catquality);
app.use('/catypecontent', checkAuth, catypecontent);
app.use('/catypeserver', checkAuth, catypeserver);

// MOVIE
app.use('/mtmovie/es', checkAuth, mtmoviees);
app.use('/mtmovie/en', checkAuth, mtmovieen);
app.use('/mtmovie/adult', checkAuth, mtmovieadult);

// EVENTS
app.use('/mtevent', checkAuth, mtevent);

// TVSHOWS
app.use('/mttvshows/en', checkAuth, mttvshowsen);
app.use('/mttvshows/es', checkAuth, mttvshowses);
app.use('/mttvshowschapter', checkAuth, mttvshowschapter);

// TV LIVE
app.use('/tvlive/es', checkAuth, tvlivees);
app.use('/tvlive/en', checkAuth, tvliveen);
app.use('/tvlive/inter', checkAuth, tvliveinter);

// AUTH
app.use('/', sysignup);

export default app;