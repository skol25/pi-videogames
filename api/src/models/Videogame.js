const { DataTypes, DATE } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


/**
 * [ ] Videojuego con las siguientes propiedades:
 * @param {*id} sequelize No puede ser un ID de un videojuego ya existente en la API rawg
 * @param {*name} sequelize 
 * @param {*description} sequelize 
 * @param {releaseDate} sequelize not required
 * @param {rating} sequelize not required
 * @param {*plataforms} sequelize 
 * 
 */


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {

    id:{
      type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    releaseDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },

    rating: {
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {timestamps:false,
    createdAt:false,
    updatedAt:false
});
};
