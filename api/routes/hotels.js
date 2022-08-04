import epxress from 'express'
import Hotel from '../models/Hotel.js'
import { getAllHotel, createHotel, updateHotel, deleteHotel } from '../controllers/hotel.js'

const router = epxress.Router()

router.get('/', getAllHotel)

router.post('/', createHotel)

router.put('/:id', updateHotel)

router.delete('/:id', deleteHotel)

export default router