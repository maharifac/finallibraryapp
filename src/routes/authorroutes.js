const express = require('express');
const authorRouter = express.Router();
function router(nav){
    var authors = [
        {
         name : "lev nicolayevich",
         age:38,
         country:"german",
         image:"image5.jpg"
        },
        {
         name : "victorhugo",
         age:75,
         country:"USA",
         image:"image6.jpg"
        },
        {
         name : "Rasool",
         age:30,
         country:"india",
         image:"image3.jpg"
        },
        {
         name : "Maharifa",
         age:26,
         country:"india",
         image:"image4.jpg"
        },
    ];

    authorRouter.route('/')
    .get((req,res)=>{
        res.render(
       'authors',
       {
           nav,
           title:"Authors",
           authors
       });
    });

    authorRouter.route('/:id')
    .get((req,res)=>{
        const id = req.params.id;
        res.render(
            'author.ejs',
            {
                nav,
                title:"authors",
                author:authors[id]
            }
        );
});

return authorRouter;
}
module.exports =router; 
