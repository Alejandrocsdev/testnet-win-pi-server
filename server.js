// 引用環境變數模組
require('dotenv').config()
// 引用後端框架
const express = require('express')
// 建立 Express 應用程式
const app = express()
// 伺服器端口
const port = process.env.PORT
// 引用前後端網域
const { serverUrl } = require('./utils')
// 根路由
app.get('/', (req, res) => res.status(200).json({ message: 'Server is up and running.', success: true }))
// 監聽伺服器運行
app.listen(port, () => console.info(`Express server running on ${serverUrl}`))
