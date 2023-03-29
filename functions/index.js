const nodemailer = require("nodemailer");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fs = require("fs");
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

const emailHTML = fs.readFileSync("./invite.html");

exports.sendSubRequest = functions.firestore.document("/subRequests/{id}")
    .onCreate((snap, context) => {
      console.log(snap.data());
      console.log(emailHTML);

      const inviteList = snap.data().invite;

      inviteList.forEach((contact) => {
        const mailOptions = {
          from: "Weam <joshcampdev@gmail.com>",
          to: contact,
          subject: "You've been invited to a game!",
          html: emailHTML,
        };
        // returning result
        return transporter.sendMail(mailOptions, (error, info, response) => {
          if (error) {
            return response.send(error.toString());
          }
          return response.send("Sent");
        });
      });
    });
