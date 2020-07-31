const router = require('express').Router()
const Recipes = require('../models/recipes_model')

router.get('/:id/recipes', async (req, res, next) => {
  try {
    const recipes = await Recipes.findRecipesByIngredient(req.params.id)
    res.json(recipes)
  } catch (error) {
    next(error)
  }
})

module.exports = router