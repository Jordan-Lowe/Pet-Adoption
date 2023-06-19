import { Router } from 'express'
import * as db from '../db/animals'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const animals = await db.getAllAnimals()
    res.json({ animals: animals.map((animal) => animal.name) })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  try {
    const animal = req.body  // fetch animal from request body
    const addedAnimal = await db.postAnimals(animal)
    res.json(addedAnimal)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
