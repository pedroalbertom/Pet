const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database/connection')

class Pet extends Model { }

Pet.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        specie: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        weight: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        modelName: 'Pet'
    }
)

module.exports = Pet