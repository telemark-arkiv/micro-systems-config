'use strict'

const { send } = require('micro')
const systems = require('./systems')

module.exports = async (request, response) => {
  send(response, 200, systems)
}
