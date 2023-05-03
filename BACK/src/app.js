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
import imagesRouter from "./routes/images.routes/images.routes";
const cookieParser = require('cookie-parser')

const app = express();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json());

app.use(cookieParser());
let FRONTEND = process.env.FRONTEND;
//dominios permitidos por variables de entorno
const dominiosPermitidos = [`${FRONTEND}`];

const corsOptions = {
  origin: function(origin, callback) {
    //permite todos los dominios
    if (dominiosPermitidos.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    }
  },
  credentials: true
};

app.use(cors(corsOptions));
app.get("/api/info", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
  });
});

// MAINTENANCE
app.use('/api/cataudio', checkAuth, cataudio);
app.use('/api/catcategory', checkAuth, catcategory);
app.use('/api/catepgchannel', checkAuth, catepgchannel);
app.use('/api/catformatvideo', checkAuth, catformatvideo);
app.use('/api/catplataform', checkAuth, catplataform);
app.use('/api/catquality', checkAuth, catquality);
app.use('/api/catypecontent', checkAuth, catypecontent);
app.use('/api/catypeserver', checkAuth, catypeserver);

// MOVIE
app.use('/api/mtmovie/es', checkAuth, mtmoviees);
app.use('/api/mtmovie/en', checkAuth, mtmovieen);
app.use('/api/mtmovie/adult', checkAuth, mtmovieadult);

// EVENTS
app.use('/mtevent', checkAuth, mtevent);

// TVSHOWS
app.use('/api/mttvshows/en', checkAuth, mttvshowsen);
app.use('/api/mttvshows/es', checkAuth, mttvshowses);
app.use('/api/mttvshowschapter', checkAuth, mttvshowschapter);

// TV LIVE
app.use('/api/tvlive/es', checkAuth, tvlivees);
app.use('/api/tvlive/en', checkAuth, tvliveen);
app.use('/api/tvlive/inter', checkAuth, tvliveinter);

// IMAGENES
app.use('/api/images/imgs', imagesRouter);

// AUTH
app.use('/api/', sysignup);




export default app;