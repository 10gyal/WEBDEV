var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
    {
    name: "Cheri", 
    image: "https://www.tourmyindia.com/international/bhutan/wp-content/uploads/sites/2/2019/08/Khamsum-Yulley-Namgyal-Chorten-1.jpg",
    description: "Punakha Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr"
    },
    {
    name: "Chelela", 
    image: "https://www.instagram.com/p/CAiOALpg6ge/media?size=l",
    description: "Haa Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr"
    },
    {
    name: "Dochula", 
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/22/d6/34.jpg",
    description: "Thimphu Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr"
    }
]
function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log("err");
        }
        console.log("removed campgrounds");
        //add a few campgrounds
            data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log("err")
                } else{
                    console.log("added a campground");
                    //create a comment
                    Comment.create({
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr",
                        author: "Homer"}, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comments")
                            }

                        });
                }
            });
        });
    });
    //add a few comments
};

module.exports = seedDB;
