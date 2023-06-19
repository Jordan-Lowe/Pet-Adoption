import connection from './connection'
import { Animal } from '../../models/animal'

export async function getAllAnimals(db = connection): Promise<Animal[]> {
  return await db('animal').select() // table name should be 'animal' not 'animals' if your table name is 'animal'
}

export async function postAnimals(animal: Animal, db = connection): Promise<Animal[]> {
  // insert animal to the database and return the inserted animal
  return await db('animal').insert(animal).returning('*')
}
