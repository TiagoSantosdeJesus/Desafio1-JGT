const express = require('express');
const app = express();
const CadastroEmpresa = require('./models/CadastroEmpresa');
const cadastroConsultor = require('./models/cadastroConsultor');

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Página inicial - UpConsult");
});

app.post("/cadastrarEmpresa", async (req, res) => {
    //console.log(req.body);

    await CadastroEmpresa.create({
        Nome_Responsavel: req.body.nomeResponsavel,
        Nome_Empresa: req.body.nomeEmpresa, 
        CPF_CNPJ: req.body.cpf_cnpj, 
        Email: req.body.email, 
        Senha: req.body.senha,
        DataNasc_Criacao: req.body.dataNascCriacao,
        Endereco: req.body.endereco
    })
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    });
    //res.send("Página cadastrar");
});

app.post("/cadastrarConsultor", async (req, res) => {
    //console.log(req.body);

    await cadastroConsultor.create({
        Nome: req.body.nome, 
        CPF_CNPJ: req.body.cpf_cnpj, 
        Email: req.body.email, 
        Senha: req.body.senha,
        Endereco: req.body.endereco,
        DataNasc: req.body.dataNasc,
        Sexo: req.body.sexo,
        Formacao: req.body.formacao,
        Anexo_Docs: req.body.docs
    })
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    });

    //res.send("Página cadastrar");
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});

/* Post.create({
        matricula: req.body.matricula, 
        nome: req.body.nome, 
        data_nascimento: req.body.data_nascimento, 
        sexo: req.body.sexo,
        salario: req.body.salario,
        supervisor: req.body.supervisor,
        departamento: req.body.departamento
        }).then(() => {
            res.send('Dados enviados com sucesso.');
        }).catch((err) => {
            res.send('Houve um erro: ' + err);
    }); */