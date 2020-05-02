'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('description')
      table.datetime('start').notNullable()
      table.datetime('end').notNullable()
      table.enu('priority',['BAIXA', 'MÉDIA', 'ALTA']).notNullable()
      table.enu('status',['EM ABERTO', 'EM DESENVOLVIMENTO', 'EM ANÁLISE', 'EM TESTE', 'RESOLVIDO']).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
