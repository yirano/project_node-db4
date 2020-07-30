exports.seed = async function (knex) {
  await knex('recipes').insert([
    { name: "Roasted Chicken" },
    { name: "Pineapple Pizza" },
    { name: "Spaghetti" },
    { name: "Kimbap" }
  ])
}