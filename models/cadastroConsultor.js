const db = require('./db2');

const Cadastro_Consultor = db2.sequelize.define('Cadastro_Consultor',
{
    Nome:
    {
        type: Seq.STRING,
        allowNull: false
    },
    CPF_CNPJ:
    {
        type: Seq.INT,
        primaryKey: true,
        allowNull: false
    },
    Email:
    {
        type: Seq.STRING,
        allowNull: false
    },
    Senha:
    {
        type: Seq.STRING,
        allowNull: false
    },
    Endereco:
    {
        type: Seq.STRING,
        allowNull: false
    },
    Data_Nasc:
    {
        type: Seq.DATE,
        allowNull: false
    },
    Sexo:
    {
        type: db.Sequelize.CHAR,
        allowNull: false
    },
    Formacao:
    {
        type: Seq.STRING,
        allowNull: false
    },
    Anexo_Docs:
    {
        type: Seq.LONGBLOB,
        allowNull: false
    }
});

module.exports = Cadastro_Consultor;