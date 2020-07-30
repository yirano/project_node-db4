const router = require('express').Router()
const { raw } = require('objection')
const db = require('../data/config')

router.get('/', async (req, res, next) => {
  try {
    const recipes = await db('recipes')
    res.json(recipes)
  } catch (error) {
    next(error)
  }
})

router.get('/:id/steps', async (req, res, next) => {
  try {
    // const step = await db('recipes')
    //   .where('recipes.id', req.params.id)
    //   .join('steps', 'steps.recipes_id', 'recipes.id')
    //   .select('steps.description as step')

    const step = await db('recipes')
      .where('recipes.id', req.params.id)
      .join('steps', 'steps.recipes_id', 'recipes.id')
      .pluck('steps.description')

    res.json(step)
  } catch (error) {
    next(error)
  }
})



module.exports = router