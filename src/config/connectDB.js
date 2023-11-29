const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydatabase', 'root', null, {
    host: 'localhost',
    dialect:'mysql',
    logging: false
});


 let connectDB = () => {
    try {
        sequelize.authenticate();
        console.log('Connect successful.');
    }catch (error) {
        console.error('Unable to connect to the database:', error);
    }
 }
 module.exports = connectDB;