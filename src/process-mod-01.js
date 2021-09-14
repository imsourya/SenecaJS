const service = require('seneca')({log: 'silent'}) ;

function sumTwo(a, b){
    return a+b;
}

/*
// Reusing 1
service.add({ role: 'math', cmd: 'sum', integer: true }, function ({integer, ...rest}, respond) {
service.act(rest, (err, resp) => {
if (err) { return console.error(err); }
respond(null, { answer: Math.floor(resp.answer) })
});
})

// Reusing 2

service.add({ role: 'math', cmd: 'sum', integer: true }, function (msg, respond) {
    this.act({
        role: 'math', cmd: 'sum', 
        left: Math.floor(msg.left),
        right: Math.floor(msg.right)
    }, respond);
});

*/

service.add({ role: 'math', cmd: 'sum' }, function (msg, respond) {
    let sum = sumTwo(msg.left, msg.right)
    respond(null, { answer: sum })
});

service.add({ role: 'math', cmd: 'sum', integer: true}, function (msg, respond) {
    let sum = sumTwo(msg.left, msg.right)
    if(msg.integer) {
        sum = Math.floor(sum)
    }
    respond(null, { answer: sum })
});

service.act({role: 'math', cmd: 'sum', left: 10, right: 2.4}, (err, resp) => {
    if (err) { return console.error(err); }
    console.log("sum: ", resp);
});


service.act({role: 'math',  cmd: 'sum', left: 10.5, right: 22.3, integer: true }, (err, resp) => {
    if (err) { return console.error(err); }
    console.log("sum: ", resp);
});