const {DataTypes} = require('sequelize');

const db = require('./connSequelize');

const User = db.define('User',{

    id:{

        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,

    },
    name:{

        type: DataTypes.STRING,
        allowNull: false,
    },

    occupation: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    newsletter:{

        type: DataTypes.BOOLEAN,

    },

    email:{

        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
    },

    idade:{

        type: DataTypes.INTEGER,
        notNull: false,

    },

})


module.exports= User;