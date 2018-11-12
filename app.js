const express = require('express');
const db = require('./models/model');
const app =  express();

(async () => {
    await db.sync({ force: true })
    .then(() => {
        
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        db.close();
    });
    app.listen(3000,() => {
        console.log('listening on' + 3000);
    });
})();