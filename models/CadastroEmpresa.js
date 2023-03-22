const db2 = require('./db2');
const seq = require('sequelize');

const CadastroEmpresa = db2.sequelize.define('Cadastro_Empresa', {
    Nome_responsavel: {
        type: seq.STRING,
        allowNull: false
    },
    Nome_Empresa: {
        type: seq.STRING,
        allowNull: false
    },    
    CPF_CNPJ: {
        type: seq.INT,
        primaryKey: true,
        allowNull: false
    },   
    Email: {
        type: seq.STRING,
        allowNull: false
    },   
    Senha: {
        type: seq.INT,
        allowNull: false
    },   
    DataNasc_Criacao: {
        type: seq.DATE,
        allowNull: true
    },   
    Endereco: {
        type: seq.STRING,
        allowNull: true
    }   
})
    
module.exports = CadastroEmpresa;
