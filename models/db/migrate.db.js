const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  'virtualhome',
  'root',
  '',
    {
        host: "localhost",
        dialect: 'mysql'
    }
);
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
const Scene = sequelize.define('scene', {
    // Model attributes are defined here
    id:{
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        comment: "Tên scene"
    },
    category_id:{
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: null,
        comment: "Loại scene"
    }
}, {
    // Other model options go here
});

// `sequelize.define` also returns the model
sequelize.sync().then(() => {
    console.log('User table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
