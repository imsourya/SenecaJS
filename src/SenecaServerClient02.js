const service = require("seneca")({ log: 'silent' });
const axios = require("axios");
const { floor } = require("lodash");

const PORT = 3000;
//const data_src = axios.get("https://jsonplaceholder.typicode.com/users");
const data = require("../data/mock-data.json");


service.add({ role: "users", cmd: "get" }, async function (msg, respond) {
	const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
	console.log(data)
	if (data) {
		var user = data.filter((function (usr) { return usr.id == msg.id }));
		var error = null;
		if (user.length === 0) {
			error = Error("user not found");
		}
		else { user = user[0] }
	} else {
		error = Error("wrong URL");
	}

	respond(error, { "user": user })
})

service.listen({ port: PORT }, () => console.log('MS at port', PORT));

const error = null;
const host = 'localhost';
const port = 3000;

// .... test client .................

function userClient02() {
	service.client({ host, port })
		.act({ role: "users", cmd: "get", id: 5 }, (err, resp) => {
			if (err) return console.log(err.msg);
			console.log("response @ name: ", resp.user[0].name);
		});
}

userClient02();