const express = require('express');
const chalk = require('chalk');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
var app = new express();

app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyparser.json())
app.use(cors());
app.use(bodyparser.urlencoded({
    extended:true
}));
app.set('views','./src/views');                                 //view is a keyword
app.set('view engine','ejs');

var nav = [
             {link:'/',title:'Home'},
             {link:'/SignUp',title:'SignUp'},
             {link:'/Login',title:'Login'},
             {link:'/books',title:'Books'},
             {link:'/Authors',title:'Author'},
             {link:'/books/addbooks',title:'Add books'}

          ];
    const booksRouter=require('./src/routes/bookroutes')(nav); 
    const authorRouter=require('./src/routes/authorroutes')(nav);  //passing nav to books router
    const loginRouter=require('./src/routes/loginroutes')(nav);
    const signupRouter=require('./src/routes/signuproutes')(nav);

    app.use('/books',booksRouter);
    app.use('/Authors',authorRouter);
    app.use('/login',loginRouter);
    app.use('/signup',signupRouter);

    mongoose.connect("mongodb://localhost:27017/library");

    app.get('/',function(req,res)                                  // '/' means localhost or rout request
{
    // res.sendFile(__dirname+"/src/views/index.html");  
    // res.sendFile(path.join(__dirname,"/src/views/index.html")); //sending using path join
    //  res.render('index.ejs');                       //in ejs sender is used instaed of sender

     res.render('index',                                //calling each navs
     {
      nav,
     title:"Library",
     
     });

    
});
app.listen(3159,function(){
    console.log('listening to port'+chalk.green('3159'));
});               