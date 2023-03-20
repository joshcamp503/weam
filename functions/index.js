const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.sendSubRequest = functions.firestore.document("/subRequests/{id}")
    .onCreate((snap, context) => {
      console.log(snap.data());

      // const collection = "subRequests";
      // const id = context.params.id;

      const activities = admin.firestore().collection("activities");

      return activities.add({text: "a new sub request was created"});
    });
