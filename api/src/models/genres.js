const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


/**
 * [ ] Videojuego con las siguientes propiedades:
 * @param {*id} sequelize
 * @param {*name} sequelize 
 *
 */
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
    id:{
      type:DataTypes.INTEGER,
      unique:true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
  },{
    timestamps:false,
    createdAt:false,
    updatedAt:false
    }
  );
};
