// express
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.post("/email", (req, res) => {
  sendMejl(req.body.from, req.body.subject, req.body.html)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.error(error);
      res.send(error);
    });
});

app.listen(port);

function sendMejl(from, subject, html) {
  const apiKey = process.env.APIKEY;

  sgMail.setApiKey(apiKey);

  const msg = {
    to: "mandus@goatit.vip",
    from: "mandus@goatit.vip",
    subject: subject,
    html: `<ul>
    <li>From: ${from}</li>
    <li>Message: ${html}</li>
    <li>Full Name: ${subject}</li>
    </ul>`,
  };
  return sgMail.send(msg);
}
