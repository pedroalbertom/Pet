const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database/connection')

class User extends Model { }

User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    },
    {
        sequelize,
        modelName: 'User'
    }
)

module.exports = User