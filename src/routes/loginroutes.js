const express=require('express');
const loginRouter=express.Router();
function router(nav){
    
    loginRouter.route('/')
    .get(function(req,res){
        res.render(
            'login.ejs',
        {
            nav,
            title:'Login',

        });
    });
    loginRouter.route('/save')
    .post(function(req,res){
        console.log(req.body);
    })

    return loginRouter;

}
module.exports=router;