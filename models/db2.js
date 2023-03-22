const Sequelize = require('sequelize');

const sequelize = new Sequelize('upconsult', 'root', '1234', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    } 
})

module.exports = sequelize;