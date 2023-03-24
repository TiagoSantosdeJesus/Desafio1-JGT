const seq = require('sequelize');
const db2 = require('./db2');

const Cadastro_Consultor = db2.define('Cadastro_Consultor',
{
    Nome:
    {
        type: seq.STRING,
        allowNull: false
    },
    CNPJ:
    {
        type: seq.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    Email:
    {
        type: seq.STRING,
        allowNull: false
    },
    Senha:
    {
        type: seq.STRING,
        allowNull: false
    },
    Endereco:
    {
        type: seq.STRING,
        allowNull: false
    },
    DataNasc: {
        type: seq.DATE,
        allowNull: true
    },
    Sexo:
    {
        type: seq.CHAR,
        allowNull: false
    },
    Formacao:
    {
        type: seq.STRING,
        allowNull: false
    },
    Anexo_Docs:
    {
        type: seq.BLOB,
        allowNull: false
    }
});

//cadastroConsultor.sync();
module.exports = Cadastro_Consultor;