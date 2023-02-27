import express from 'express';
import {connect} from './config/database.js';
const app = express();

import service from './services/tweet-service.js';

app.listen(3000, async () => {
    console.log('Server Started');
    await connect();
    
    let ser = new service(); 
    await ser.create({
        content : 'my other #CoDe #works or #NOT ?'
    });
})