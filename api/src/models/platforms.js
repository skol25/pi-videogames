const { DataTypes } = require("sequelize")



module.exports = (sequelize) => {

    sequelize.define('platform',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            defaultValue:DataTypes.INTEGER,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        timestamps:false,
        createdAt:false,
        updatedAt:false
        })

}