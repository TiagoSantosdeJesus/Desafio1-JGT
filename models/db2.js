const Sequelize = require('sequelize');

const sequelize = new Sequelize('upconsult', 'root', 'Senha', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    } 
})

module.exports = sequelize;