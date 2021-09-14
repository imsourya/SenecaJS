const service = require ("seneca")({log: 'silent'});

const data = require ("../data/mock-data.json");
const PORT = 3000 ;

service.add({role: "users", cmd: "get"}, function(msg, respond) {

	var user = data.filter(function(usr) { return usr.id == msg.id});
	var error =null;
	if (user.length === 0 ) {
		error = Error ("user not found");
	}
	else{ user = user[0] }
	
	respond(error, {"user" : user})
})

service.listen({port: PORT}, () => console.log('MS at port', PORT));

// Client
function userClient01() {
	service.act({role:"users", cmd:"get",id:4},  (err, resp) => {
		if (err) return console.log (err.msg);
		console.log ("userClient01 response @ first name: ", resp.user.first_name);
		process.exit(0) ;
	})
}

//userClient01() ;
