const { DataTypes, DATE } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


/**
 * [ ] Videojuego con las siguientes propiedades:
 * @param {*id} sequelize No puede ser un ID de un videojuego ya existente en la API rawg
 * @param {*name} sequelize 
 *
 */
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    timestamps:true,
    createdAt:false,
    updatedAt:false
    }
  );
};
