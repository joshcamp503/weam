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

const inviteSource = fs.readFileSync("./invite.html", "utf-8");
const inviteTemplate = Handlebars.compile(inviteSource);
const rsvpSource = fs.readFileSync("./rsvp.html", "utf-8");
const rsvpTemplate = Handlebars.compile(rsvpSource);
const confirmationSource = fs.readFileSync("./confirmation.html", "utf-8");
const confirmationTemplate = Handlebars.compile(confirmationSource);

exports.sendSubRequest = functions.firestore.document("/subRequests/{id}")
    .onCreate((snap, context) => {
      const inviteList = snap.data().invite;
      const eventInfo = {
        id: snap.data().id,
        name: snap.data().creatorName,
        event: snap.data().event,
        location: snap.data().location,
        date: snap.data().date,
        time: snap.data().time,
      };

      const sendEmail = (contacts, locals) => {
        contacts.forEach((contact) => {
          const mailOptions = {
            from: "Weam <joshcampdev@gmail.com>",
            to: contact,
            subject: "You've been invited to a game!",
            html: inviteTemplate(locals),
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

      sendEmail(inviteList, eventInfo);
    });


exports.sendRSVPRequest = functions.firestore.document("/subRequests/{id}")
    .onUpdate((snap, context) => {
      if (snap.after.data().rsvp.pending === undefined) return false;
      const rsvpInfo = {
        id: snap.after.data().id,
        creatorEmail: snap.after.data().creatorEmail,
        name: snap.after.data().creatorName,
        event: snap.after.data().event,
        location: snap.after.data().location,
        date: snap.after.data().date,
        time: snap.after.data().time,
        rsvpName: snap.after.data().rsvp.rsvpName,
        rsvpEmail: snap.after.data().rsvp.rsvpName,
      };
      if (snap.after.data().rsvp.pending) {
        const sendEmail = (contact, locals) => {
          const mailOptions = {
            from: "Weam <joshcampdev@gmail.com>",
            to: contact,
            subject: "You've received an RSVP!",
            html: rsvpTemplate(locals),
          };
          // returning result
          return transporter.sendMail(mailOptions, (error, info, response) => {
            if (error) {
              return response.send(error.toString());
            }
            return response.send("Sent");
          });
        };
        sendEmail(rsvpInfo.creatorEmail, rsvpInfo);
      } else if (!snap.after.data().rsvp.pending) {
        const sendEmail = (contact, locals) => {
          const mailOptions = {
            from: "Weam <joshcampdev@gmail.com>",
            to: contact,
            subject: "Your RSVP has been accepted!",
            html: confirmationTemplate(locals),
          };
          // returning result
          return transporter.sendMail(mailOptions, (error, info, response) => {
            if (error) {
              return response.send(error.toString());
            }
            return response.send("Sent");
          });
        };
        sendEmail(rsvpInfo.creatorEmail, rsvpInfo);
      }
    });


