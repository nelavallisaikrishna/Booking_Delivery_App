/**
 * Created by mahasagar on 20/12/16.
 */
var User = require('../models/User');
var Messages = require('../Utilities/messages');


function createUserAPI(req,res){
    var createUser = new User(req.body);
    var checkUsername = {
        'username' : req.body.auth.username
    }
    getUserByUsername(checkUsername,function(userExistsRes){
        if(userExistsRes.result == false) {
            createUser.save(function (err, result) {
                res.json({result : result});
            });
        }else{
            res.json(userExistsRes);
        }
    });

}

function getUserByUsername(req,res){
    var loginDetail = {
        'auth.username' :req.username
    };
    User.findOne(loginDetail,function(req,results){
        if(results !== null) {
            res({result :Messages.usernameExists});
        }else{
            res({result :false});
        }
    })
}

function loginToApp(req,res){
    var loginDetail = {
        'auth.username' :req.body.username,
        'auth.password' : req.body.password
    };
    User.findOne(loginDetail,function(req,results){
        if(results !== null) {
            res.json({result :results});
        }else{
            res.json({result : Messages.userOrPasswordWrong});
        }
    })
}

function listOfUserAPI(req,res){
    User.find({},function(req,results){
        res.json({result : results});
    })
};

module.exports.createUser = createUserAPI;
module.exports.listOfUser = listOfUserAPI;
module.exports.loginToApp = loginToApp;