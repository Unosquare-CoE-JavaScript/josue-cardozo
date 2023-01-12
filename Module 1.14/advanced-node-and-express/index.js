let express = require("express");
let app = express();
let pug = require("pug");
let session = require("express-session");
let passport = require("passport");
let ObjectId = require("mongodb").ObjectId;
const { MongoClient, ServerApiVersion } = require("mongodb");
let LocalStrategy = require("passport-local");
let bodyParser = require("body-parser");
const bcrypt = require('bcrypt');

app.set("view engine", "pug");
app.set("views", "./pages");

app.set(
  session({
    secret: "sdufg",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
  passport.initialize(),
  passport.session()
);

const PW = "elgpg251099";
const uri =
  "mongodb+srv://admin:" +
  PW +
  "@cluster0.gqeai.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err, db) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(3000);

    app.get("/", (request, response) => {
      response.render("homepage", { message: "Hola desde el server" });
    });

    app.get("/logout", (req, res) => {
      req.logOut();
      res.redirect('/');
    });

    app.use((req, res) => {
      res.status(404)
      .type('text')
      .send('Not Found')
    });

    app.post('/register',
      bodyParser.urlencoded({extended: false}),
      (req, res, next) => {
        db.collection('users').findOne(
          {username: req.body.username},
          (error, user) => {
            if(!error && user) {
              res.redirect('/')
            }
          }
        )
        let hash = bcrypt.hashSync(req.body.password, 12);
        db.collection('users').insertOne(
          {
            username: req.body.username,
            password: hash,
            name: req.body.name,
            bio: req.body.bio,
            pic: req.body.pic
          },
          (error, createdUser) => {
            if(!error && createdUser) {
              next();
            }
          }
        )
      },
      passport.authenticate('local', {failureRedirect: '/'}),
      (req, res) => {
        res.redirect('/profile');
      }
    )

    /* Save userId to a cookie */
    passport.serializeUser((user, done) => {
      done(null, user._id);
    });

    /* Retrieve User details from cookie */
    passport.deserializeUser((userId, done) => {
      db.collection("users").findOne(
        { _id: new ObjectId(userId) },
        (error, doc) => {
          done(null, doc);
        }
      );
    });

    let findUserDocument = new LocalStrategy((username, password, done) => {
      db.collection("users").findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        } else if (!user) {
          done(null, false);
        } else if (bcrypt.compareSync(password, user.password)) {
          done(null, false);
        } else {
          done(null, user);
        }
      });
    });
    passport.use(findUserDocument);

    let isSignedIn = (req, res, next) => {
      if (req.isAuthenticated()) {
        next();
      } else {
        res.redirect('/');
      }
    };

    app.post(
      "/login",
      isSignedIn,
      bodyParser.urlencoded({ extended: false }),
      passport.authenticate("local", { failureRedirect: "/" }),
      (req, res) => {
        console.log(req.user);
        res.render("signed_in", { 
          name: req.user.name,
          bio: req.user.bio,
          pic: req.user.pic
        });
      }
    );
  }
  //client.close();
});
