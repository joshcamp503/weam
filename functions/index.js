const nodemailer = require("nodemailer");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fs = require("fs");
const Handlebars = require("handlebars");
admin.initializeApp();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "joshcampdev@gmail.com",
    pass: "zvvjfagtbzolakki",
  },
});

const source = fs.readFileSync("./invite.html");
const template = Handlebars.compile(source);

exports.sendSubRequest = functions.firestore.document("/subRequests/{id}")
    .onCreate((snap, context) => {
      console.log(snap.data());
      console.log(source);

      const inviteList = snap.data().invite;

      const sendEmail = (contacts, locals) => {
        contacts.forEach((contact) => {
          const mailOptions = {
            from: "Weam <joshcampdev@gmail.com>",
            to: contact,
            subject: "You've been invited to a game!",
            html: template(locals),
          };
          // returning result
          return transporter.sendMail(mailOptions, (error, info, response) => {
            if (error) {
              return response.send(error.toString());
            }
            return response.send("Sent");
          });
        });
      };

      sendEmail(inviteList, {name: snap.data().creator});
    });
