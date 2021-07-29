const {Model,DataTypes} =require('sequelize');
const sequelize = require('../config/connection');
 

class Post extends Model{}

Post.init(
{
    id:
    {
        type :DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    title:
    {
        type:DataTypes.STRING,
        allowNull:false

    },
    post_url:
    {
        type:DataTypes.STRING,
        allowNull:false,
        validate:
        {
            isURL: true
        }
    },
    user_id :
    {
        type: DataTypes.INTEGER,
        references:{
            model :'user',
            key:'id'
        }
    }
},
{
    sequelize,
    // disable the modification of table names; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
    freezeTableName :true,
      // Will automatically set field option for all attributes to snake cased name.
  // Does not override attribute with field option already defined

    underscored:true, 
    modelName:'post'
});

module.exports = Post;