const express = require('express');
const connect  = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const TweetService  = require('./services/tweet-service');
const Comment = require('./model/comment');

app.listen(3000, async () => {
    console.log('Server Started');
    await connect();
    const service = new TweetService();
    // tweetRepo.create({
    //     content : 'This is 1st tweet',
    //     userEmail: 'a@b.com'
    // })
    service.create({
        content : 'This is 6th #tweet and #coding is necessary',
        // userEmail: 'c@d.com'
    })
    // const t=await tweetRepo.getAll(1,3);
    // console.log(t);
})