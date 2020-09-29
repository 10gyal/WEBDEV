const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog_demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema)

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email: "charlie@brown.edu",
//     name: "Charlie Brown"
// });

// newUser.save(function(err, user){
//     if(err) {
//         console.log("err");
//     } else {
//         console.log(user);
//     }
// });

var newPost = new Post({
    title: "Reflections on Apples",
    content: "They are delicious"
});

newPost.save(function(err, post){
    if(err){
        console.log("err")
    } else {
        console.log(post);
    }
})