// This file is the client to The server in file SenecaServer_Cleint.js

const service = require ("seneca")({log: 'silent'});

const host = 'localhost' ;
const port = 3000 ;
const user_id = 5 ;


// client02
service.client({host, port })
       .act({"role":"users", "cmd":"get", "id": user_id}, function (err,resp) {
            if (err) return console.log (err.msg);
            console.log ("Client02 resp @ f_name (for id = 5): ", resp.user.first_name);
})