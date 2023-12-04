require('dotenv').config();

const path = require('path');
const express = require('express');
const session = require('express-session');
const db = require ('./config/connection');
const routes = require ('./routes');
const MongoStore = require('connect-mongo');

const PORT = process.env.PORT || 3001;
const app = express();

// const fakeData={
//   name:"playful-Pixels"
// }

// app.use(express.static("client"))

const sess = {
  secret: process.env.SESSIONSECRET,
  cookie: {
    maxAge: 600000 *5, //cookie expires in 5 minutes of inactivity
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
  },
  store: MongoStore.create({ 
    client: mongoose.connection.getClient(),
    dbName: process.env.MONGO_DB_NAME,
    collectionName: "sessions",
    stringify: false,
    autoRemove: "interval",
    autoRemoveInterval: 1
  })

}

app.use (session(sess));


app.use (express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Now listening on port ${PORT}`);
    });
  });