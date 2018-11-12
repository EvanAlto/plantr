const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {
    logging: false
});

const Gardener = db.define('gardener', {
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }

});

const Plot = db.define('plot', {
    size: {
        type: Sequelize.INTEGER
    },
    shaded: {
        type: Sequelize.BOOLEAN,
        // defaultValue : false
    }
})

const Vegetable = db.define('vegetable', {
    name: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING,
    },
    planted_on: {
        type: Sequelize.DATE
    }
})

Vegetable.belongsToMany(Plot, { through: 'vegetable_plot' })
Plot.belongsToMany(Vegetable, { through: 'vegetable_plot' })

Plot.belongsTo(Gardener)
Gardener.hasOne(Plot)

Gardener.belongsTo(Vegetable)
Vegetable.hasMany(Gardener)

module.exports = db;