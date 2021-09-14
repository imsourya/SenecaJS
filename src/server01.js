const  seneca = require("seneca")({log: 'silent'});

seneca.add({ component: "greeter" }, (msg, respond) => {
  respond(null, { message: "Welcome " + msg.name });
});

//  ................

seneca.act({ component: "greeter", name: "Ajay" }, (error, response) => {
  if (error) return console.log(error);
  console.log("response: ", response.message);
});