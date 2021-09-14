
const express = require('express');
const app = express();
const seneca = require('seneca')({ log: 'silent' });
const web = require('seneca-web');
const axios = require('axios');
const sen_adapter = require('seneca-web-adapter-express') ;

const port = 3000 ;

const getData = async (arg, done) => {
    const {data} = await axios('https://jsonplaceholder.typicode.com/users/1');
    //console.log(data)
    //done(null, {temp: 'high', sensor: "active", power: {voltage: 2.3, current: 0.21}});
    done(null, data);
}


const routes = [{
  prefix: '/api',
  pin: 'role:api, cmd:*',
  map: {
    status: { GET: true }
  }
}];

const config = {
  context: app,
  routes: routes,
  adapter: sen_adapter
};

seneca.add('role:api, cmd:status', getData);
seneca.use(web, config);
seneca.ready(() => app.listen(port, () => console.log('Express (seneca), at port: ', port)) )
