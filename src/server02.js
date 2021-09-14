const service = require("seneca")({log: 'silent'});

service.add({ role: "math", cmd: "sum" }, (msg, respond) => {
  const sum = msg.left + msg.right;
  respond(null, { answer: sum });
});


service.act({role: 'math', cmd: 'sum', left: 10, right: 2}, (err, resp) => {
    if (err) { return console.error(err); }
    console.log("sum: ", resp);
});

service.add({ role: "math", cmd: "prod" }, (msg, respond) => {
    const prod = msg.left * msg.right;
    respond(null, { answer: prod });
  });
  
  
  service.act({role: 'math', cmd: 'prod', left: 10, right: 2}, (err, resp) => {
      if (err) { return console.error(err); }
      console.log("prod: ", resp);
  });

  service.add({ math: "sumAll" }, (msg, respond) => {
      let total = 0
     for(value of msg.values){
          total = total + value;
      }
      
    respond(null, { sum: total });
  });

  service.act({ math: "sumAll", values: [ 10, 20, 3 ] }, (err, msg) => {
    if (err) return console.error(err);
 
    console.log("consumer's sum = %s", msg.sum);
});