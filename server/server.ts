import express from 'express'
import { join } from 'path'  // corrected from 'node:path'
import animalRoutes from './routes/animals' 

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/animals', animalRoutes)  // corrected from 'https://api.petfinder.com/v2/animals/'

export default server
