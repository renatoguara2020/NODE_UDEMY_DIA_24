const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node_testes_victor', 'postgres', '456ALVES',{
    host: 'localhost',
    dialect: 'postgres',

});

try {
    
    sequelize.authenticate();

    console.log('Conectou com Sucesso ao Banco de dados Mysql')

} catch (error) {
    
    console.error('Não foi possivel conectar',error);
}

//sequelize.sync({force:true})
module.exports = sequelize;