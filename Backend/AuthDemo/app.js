var express = require("express");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/auth_demo_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

var passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "WebDev requries grind",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

////ROUTES

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
})

//AUTH ROUTES

//SHOW SIGN
app.get("/register", function(req, res){
    res.render("register");
});

//handling user sign up
app.post("/register", function(req, res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        })
    });
});

//LOGIN Routes

//Render login form
app.get("/login", function(req, res){
    res.render("login")
});

//Login logic
//middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){
});

//LOGOUT
app.get("/logout", function(req, res){
    req.logOut();
    res.redirect("/")
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } res.redirect("/login");
};


app.listen(2000, function(){
    console.log("Server started!")
})