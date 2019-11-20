const express=require('express');
const signupRouter=express.Router();
function router(nav){
    
    signupRouter.route('/')
    .get(function(req,res){
        res.render(
            'signUp.ejs',
        {
            nav,
            title:'SignUp',

        });
    });
        signupRouter.route('/save')
        .post(function(req,res){
            console.log(req.body);
    })
    return signupRouter;

};
module.exports=router;