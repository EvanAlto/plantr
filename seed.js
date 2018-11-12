const express = require('express');
const { db, Vegetable } = require('./models/model');
const app =  express();

(async () => {
    await db.sync({ force: true })
    .then(() => {
        return Vegetable.create({ name: 'carrot', color: 'orange'});
        console.log('db synced');
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        db.close();
    });
})();