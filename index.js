
(async () => {
    const db2 = require("./models/db2");
    const cadastroEmpresa = require('./models/CadastroEmpresa');
    const cadastroConsultor = require('./models/cadastroConsultor');

    try {
        const resultado = await db2.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();