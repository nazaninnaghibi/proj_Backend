const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/api/userRoute');
const authRoute = require('./routes/api/authRoute');
const flightRoute = require('./routes/api/flightRoute');
const raserRoute = require('./routes/api/raserRoute');
const postRoutes = require('./routes/api/posts');
const connectDB = require('./config/connectDB');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/api/users');
const aRoutes= require("./routes/api/auth.routes");
const uRoutes = require("./routes/api/user.routes");
const cRoutes = require("./routes/api/city.routes");
const hRoutes = require("./routes/api/hotel.routes");
const conRoutes = require("./routes/api/contact.us");
const fRoutes = require("./routes/api/faq.routes");
const resFRoutes = require("./routes/api/flight.reservation.routes");
const resHRoutes = require("./routes/api/hotel.reservation.routes");

const app = express();

//coneect to db
connectDB();

//set a middleware to parse dat
app.use(express.json());
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;


db.mongoose
    .connect(`mongodb+srv://nazanin:123@cluster0.wbmtr.mongodb.net/taskapp?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Successfully connect to MongoDB.");
      initial();
    })
    .catch(err => {
      console.error("Connection error", err);
      process.exit();
    });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to green technology application." });
});

// routes
app.use('/api/auth.routes', aRoutes);
app.use("/api/user.routes", uRoutes);
app.use("/api/city.routes", cRoutes);
app.use("/api/hotel.routes", hRoutes);
app.use("/api/contact.us", conRoutes);
app.use("/api/faq.routes", fRoutes);
app.use("/api/flight.reservation.routes", resFRoutes);
app.use("/api/hotel.reservation.routes", resHRoutes);


app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/flight',flightRoute);
app.use('/api/reserve',raserRoute);
app.use('/posts',postRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started');
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

