import epxress from 'express'
import { getAllHotel, getHotelByID, createHotel, updateHotel, deleteHotel } from '../controllers/hotel.js'

const router = epxress.Router()

router.get('/', getAllHotel)

router.get('/:id', getHotelByID)

router.post('/', createHotel)

router.put('/:id', updateHotel)

router.delete('/:id', deleteHotel)

export default router