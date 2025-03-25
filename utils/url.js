const { NODE_ENV, SERVER_URL, PORT } = process.env

const isProduction = NODE_ENV === 'production'

const serverUrl = isProduction ? SERVER_URL : `http://localhost:${PORT}`

module.exports = { serverUrl }
