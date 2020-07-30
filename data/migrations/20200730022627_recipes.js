
exports.up = async function (knex) {
  await knex.schema.createTable('recipes', table => {
    table.increments('id')
    table.text('name').unique().notNull()
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('recipes')
}
