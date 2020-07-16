const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const admin = require('firebase-admin');
require("dotenv").config();

// const serviceAccount = require('./firebase_credentials.json');

admin.initializeApp({
  // credential: admin.credential.cert(serviceAccount),
  credential: admin.credential.cert({
    project_id: process.env.FIREBASE_PROJECT_ID,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  }),
  databaseURL: "https://vuejs-firestoredb.firebaseio.com"
});

const app = express();
const db = admin.firestore();

app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

function checkAuth(req, res, next) {
  if (req.headers.authtoken) {
    admin.auth().verifyIdToken(req.headers.authToken)
      .then(() => next())
      .catch(() => res.status(403).send('unauthorized'));
  } else {
    res.status(code = 403).send({
      code: code,
      message: 'unauthorized',
    });
    return;
  }
};

app.post("/names", async (req, res) => {
  try {
    const newDoc = await db
      .collection("names")
      .add({
        name: req.body.name
      });

    res.status(201).send(`created: ${newDoc.id}`);
  } catch (error) {
    res.status(400).send(`error: ${error}`);
  }
});

app.get("/names", async (req, res) => {
  try {

    const docRef = db.collection("names");
    const snapshot = await docRef.get();

    const namesArray = [];

    snapshot.docs.map(doc => {
      let data = doc.data().name
      namesArray.push(data);
    });

    res.status(201).send({
      response: namesArray
    });
  } catch (error) {
    res.status(400).send(`error: ${error}`);
  }
});

app.get("/test", async (req, res) => {
  try {
    const reqName = req.query.name;

    const docRef = db.collection("names");
    const snapshot = await docRef.get();

    let output = snapshot.docs.map(doc => {
      return doc.data().name;
    }).filter(data => data == reqName);

    if (output == reqName) {
      console.log(req.body);
      res.status(200).json({ message: `found ${reqName} in firebasedb` })
    } else {
      res.status(404).json({ message: `not found ${reqName} in firebasedb` });
    }

    // const namesArray = [];
    // snapshot.docs.map(doc => {
    //   let data = doc.data().name
    //   namesArray.push(data);
    // });

    // res.status(200).send({
    //   names: namesArray
    // });
  } catch (error) {
    console.log(error);
    // res.status(400).send(`error: ${error}`);
  }
});

module.exports = app;
