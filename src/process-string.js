   
    const service = require('seneca')({log: 'silent'}) ;
    
    service.add({ cmd: 'wordcount' }, function (msg, respond) {
        var val = 0 ;
        if(msg.phrase){
            val =  msg.phrase.split(" ");
        }
        respond(null, { answer: val.length })
    });

    service.add({ cmd: 'wordcount', skipShort: true}, function (msg, respond) {
        const count = msg.phrase.split(' ').filter(word => word.length > 3).length
        respond(null, { answer: count })
    });
    
    const myphrase = "A msg from service server, pushed to the client" ;

    service.act(
      { cmd: "wordcount", phrase: myphrase },
      (err, resp) => {
        console.log("count_info:", resp.answer);
      }
    );

    service.act(
        { cmd: "wordcount", skipShort: true,  phrase: myphrase },
        (err, resp) => {
          console.log("count_info_2:", resp.answer);
    });