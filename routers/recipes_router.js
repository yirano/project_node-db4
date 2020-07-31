const router = require('express').Router()
const { raw } = require('objection')
const Recipes = require('../models/recipes_model')

router.get('/', async (req, res, next) => {
  try {
    const recipes = await Recipes.find()
    res.json(recipes)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const recipe = await Recipes.findById(req.params.id)
    res.json(recipe)
  } catch (error) {
    next(error)
  }
})

router.get('/:id/instructions', async (req, res, next) => {
  try {
    const steps = await Recipes.findInstructions(req.params.id)
    res.json(steps)
  } catch (error) {
    console.dir(error)
    next(error)
  }
})

router.get('/:id/shoppingList', async (req, res, next) => {
  try {
    const ingreds = await Recipes.findIngredients(req.params.id)
    res.json(ingreds)
  } catch (error) {
    next(error)
  }
})



module.exports = router