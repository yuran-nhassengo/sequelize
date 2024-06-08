const Sequelize = require('sequelize');
const sequelize = new Sequelize('testou','root','7345',{
    host:"localhost",
    dialect: "mysql"
}); 

//Create models

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

const user = sequelize.define('users',{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

//user.sync({force:true});

//Postagem.sync({force: true});