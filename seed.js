const express = require('express');
const db = require('./models/model');
const app =  express();

(async () => {
    await db.sync({ force: true })
    .then(() => {
        console.log('db synced');
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        db.close();
    });
})();