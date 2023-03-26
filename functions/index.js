const nodemailer = require("nodemailer");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// app password:
// zvvjfagtbzolakki

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "joshcampdev@gmail.com",
    pass: "zvvjfagtbzolakki",
  },
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.sendSubRequest = functions.firestore.document("/subRequests/{id}")
    .onCreate((snap, context) => {
      console.log(snap.data());

      const inviteList = snap.data().invite;

      inviteList.forEach((contact) => {
        const mailOptions = {
          from: "Weam <joshcampdev@gmail.com>",
          to: contact,
          subject: "You've been invited to a game!",
          html: "<p>You've been invited to a game!</>",
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
