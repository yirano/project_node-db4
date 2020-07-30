
exports.up = async function (knex) {
  await knex.schema.createTable('recipes', table => {
    table.increments('id')
    table.text('name').unique().notNull()
  })
  await knex.schema.createTable('steps', table => {
    table.increments('id')
    table.text('description').notNull()
    table
      .integer('recipes_id')
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
  await knex.schema.createTable('ingredients', table => {
    table.increments('id')
    table.text('name').unique().notNull()
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('ingredients')
  await knex.schema.dropTableIfExists('steps')
  await knex.schema.dropTableIfExists('recipes')
}
