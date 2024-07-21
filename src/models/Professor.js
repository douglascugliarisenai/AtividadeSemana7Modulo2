const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const Professor = connection.define('professores', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    paranoid: true //  Habilita soft delete
});


module.exports = Professor;