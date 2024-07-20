const { db } = require("../database");

const DataTypes = require("sequelize");



// User model
const User = db.define("User", {
   userId: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement: true
   },
   firstName: {
     type: DataTypes.STRING,
     allowNull: false
   },
   lastName: {
     type: DataTypes.STRING,
     allowNull: false
   },
   email: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       isEmail: true
     }
   },
   password: {
     type: DataTypes.STRING,
     allowNull: false
   },
   phoneNumber: {
     type: DataTypes.STRING(15),
     allowNull: false
   }
   
  
 }, {
   timestamps: false,
   tableName: "User"
 });
 
 
 
 
 
 module.exports = { User };
 