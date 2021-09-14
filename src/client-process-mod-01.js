service.act({role: 'math', cmd: 'sum', left: 10, right: 2.4}, (err, resp) => {
    if (err) { return console.error(err); }
    console.log("sum: ", resp);
});


service.act({role: 'math',  cmd: 'sum', left: 10.5, right: 22.3, integer: true }, (err, resp) => {
    if (err) { return console.error(err); }
    console.log("sum: ", resp);
});