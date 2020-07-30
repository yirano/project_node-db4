exports.seed = async function (knex) {
  await knex('steps').insert([
    { recipes_id: 1, description: "Clean" },
    { recipes_id: 1, description: "Something" },
    { recipes_id: 1, description: "Something" },
  ])
}