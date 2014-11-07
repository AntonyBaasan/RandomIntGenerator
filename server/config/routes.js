/**
 * Created by AntonyBaasan on 14-11-07.
 */

var generator = require('../controllers/generator')
module.exports = function(app){
    console.log("routes.js exported");

// ----- API request handlers (start)
    //for partial views
    app.get('/api/generator/:from/:to', generator.getRandUnique);

    //for partial views (for Angular)
    app.get('/partials/*', function(req, res){
        res.render('../../public/app/' + req.params[0]);
    });

    //if Api is unknown, the return 404 (otherwise we get default page)
    app.all('/api/*', function(req,res){
        res.send(404);
    })


    //set default route. Because SPA we need only one route.
    app.get('*', function(req, res){
        console.log("/* : "+req);
        console.log("req.user : %j"+req.user);
        res.render('index');
    });
}