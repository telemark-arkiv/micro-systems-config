'use strict'

const { send } = require('micro')
const systems = require('./config/systems.json')

module.exports = async (request, response) => {
  send(response, 200, systems)
}
