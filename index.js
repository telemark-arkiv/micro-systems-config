'use strict'

const { send } = require('micro')
const systems = require('./config/systems.json')

module.exports = async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', 'GET')
  send(response, 200, systems)
}
