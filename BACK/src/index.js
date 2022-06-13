import app from "./app";
const nodemailer = require("nodemailer");
require("dotenv").config();
const mysqlconnection = require("../src/database");
var cron = require('node-cron');

let port = process.env.PORT;
app.listen(port);

console.log(`Server is running on http://localhost:${port}`);




cron.schedule('48 20 * * *', () => {
  //ENVIA EMAIAUTOMATICO
  const transporter = nodemailer.createTransport({
    host: "mail.appteck.com",
    port: 465,
    secure: true,
    pool: true,
    auth: {
      user: "csauceda@appteck.com",
      pass: "Crisssf96@"
    }
  });

    mysqlconnection.query(`SELECT TITLE as title, YEAR as year FROM MT_CONTENTS `, (err, rows) => {
      //otra consulta para obtener los emails de los usuarios
      if (!err) {
        //guardar en variable como json
        var json = JSON.stringify(rows);
          //enviar email
        const listapeliculas = JSON.parse(json);

        const info = transporter.sendMail({
          from: "TM+ - Sistema de Gestión de Contenido",
          to: "csauceda@appteck.com",
          subject: "Reporte contenido subido a TopMedia+",
          text: `Reporte contenido subido a TopMedia+`,
          html: `
                    <!DOCTYPE html>
                    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
                    <head>
                      <meta charset="utf-8">
                      <meta name="viewport" content="width=device-width,initial-scale=1">
                      <meta name="x-apple-disable-message-reformatting">
                      <title></title>
                      <!--[if mso]>
                      <style>
                        table {border-collapse:collapse;border-spacing:0;border:none;margin:0;}
                        div, td {padding:0;}
                        div {margin:0 !important;}
                      </style>
                      <noscript>
                        <xml>
                          <o:OfficeDocumentSettings>
                            <o:PixelsPerInch>96</o:PixelsPerInch>
                          </o:OfficeDocumentSettings>
                        </xml>
                      </noscript>
                      <![endif]-->
                      <style>
                        table, td, div, h1, p {
                          font-family: Arial, sans-serif;
                        }
                        @media screen and (max-width: 530px) {
                          .unsub {
                            display: block;
                            padding: 8px;
                            margin-top: 14px;
                            border-radius: 6px;
                            background-color: #555555;
                            text-decoration: none !important;
                            font-weight: bold;
                          }
                          .col-lge {
                            max-width: 150% !important;
                          }
                        }
                        @media screen and (min-width: 531px) {
                          .col-sml {
                            max-width: 27% !important;
                          }
                          .col-lge {
                            max-width: 73% !important;
                          }
                        }
                      </style>
                    </head>
                      <body style="margin:0; padding:0; word-spacing:normal; background-color:#bacef5;">
                        <div role="article" aria-roledescription="email" lang="en" style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#bacef5;">
                        <table role="presentation" style="width:100%;border:none;border-spacing:0;">
                          <tr>
                            <td align="center" style="padding:0;">
                              <!--[if mso]>
                              <table role="presentation" align="center" style="width:1000px;">
                              <tr>
                              <td>
                              <![endif]-->
                              <table role="presentation" style="width:94%;max-width:600px;border:none;border-spacing:0;text-align:left;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636;">
                                <tr>
                                  <td style="padding:40px 30px 30px 30px;text-align:center;font-size:24px;font-weight:bold;">
                                  <span lang="ES-US" style="font-size: 36.0pt">TOPMEDIA+</span>
                                  <p align="center" style="margin: 0in; margin-bottom: .0001pt; text-align: center"><b><span lang="es-419" style="font-size: 16.0pt; font-family: &quot;Verdana&quot;,sans-serif">________________________</span></b><span lang="ES-HN" style="font-size: 16.0pt"><!-- o ignored --></span></p>
                                  </td>
                                </tr>
                                <p align="center" style="text-align: center"><span lang="es-419" style="font-size: 18.0pt; font-family: &quot;Verdana&quot;,sans-serif">Reporte Semanal de Contenido Subido<span style="color: red"><strong><span lang="es-419" style="font-size: 16.0pt; font-family: &quot;Verdana&quot;,sans-serif"> 2022</span></strong><strong><span lang="es-419" style="font-size: 10.0pt; font-family: &quot;Verdana&quot;,sans-serif">.</span></strong></p>
                                <tr>
                                  <td style="padding:30px;background-color:#ffffff;">
                                    <h3 style="margin:0;">Series en Inglés</h3>
                                      <ol>
                                          ${listapeliculas.map((pelicula) => `<li>${pelicula.title} <span style="color: red">(${pelicula.year})</span></li>`).join("")}
                                      </ol>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding:30px;background-color:#ffffff;">
                                    <h3 style="margin:0;">Series en Español</h3>
                                  </td>
                                </tr>           
                                <tr>
                                  <td style="padding:30px;background-color:#ffffff;">
                                    <h3 style="margin:0;">Películas en Español</h3>
                                  </td>
                                </tr>
                                <tr>
                                <td style="padding:30px;background-color:#ffffff;">
                                  <h3 style="margin:0;">Películas en Inglés</h3>
                                </td>
                              </tr>
                              <tr>
                              <td style="padding:30px;background-color:#ffffff;">
                                <h3 style="margin:0;">Eventos Deportivos</h3>
                              </td>
                            </tr>
                                <tr>
                                  <td style="padding:30px;text-align:center;font-size:12px;background-color:#404040;color:#cccccc;">
                                    <p style="margin:0;">© 2022 TopMedia. All rights reserved.</p>
                                  </td>
                                </tr>
                              </table>
                              <!--[if mso]>
                              </td>
                              </tr>
                              </table>
                              <![endif]-->
                            </td>
                          </tr>
                        </table>
                      </div>
                    </body>
                    </html>
      `,
        });
      } else {
        console.log(err);
      }
    });
  
}, {
  scheduled: true,
  timezone: "America/Tegucigalpa"
});