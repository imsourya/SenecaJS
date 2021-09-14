//localhost:3000/act?stack=get   ===> []
//localhost:3000/act?stack=push&value=icecream  ===> ["icecream"] 
    
//localhost:3000/act?stack=push&value=chocolate  ===> ["icecream", "chocolate"]
//localhost:3000/act?stack=pop


const service = require("seneca")({ log: 'silent' });
const axios = require("axios");
const { floor } = require("lodash");

const PORT = 3000;

let Data = []

service.add({ stack:"get" }, function (msg, respond) {
	respond(null, Data)
})

service.add({ stack:"push" }, function (msg, respond) {
    Data.push(msg.value)
	respond(null, Data)
})

service.add({stack: "pop"}, function (msg, respond) {
    Data.pop()
	respond(null, Data)
})

service.listen({ port: PORT }, () => console.log('MS at port', PORT));