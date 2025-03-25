'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const config = require('../config/mysql')
const db = {}
// 取消預設日誌
const sequelize = new Sequelize(config.database, config.username, config.password, { ...config, logging: false })

// 顯示連線狀態
sequelize
  .authenticate()
  .then(() => console.info(`MySQL connection successful: Database "${config.database}"`))
  .catch(() => console.error(`MySQL connection failed: Database "${config.database}"`))

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js' && file.indexOf('.test.js') === -1
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
