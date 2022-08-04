import epxress from 'express'
import Hotel from '../models/Hotel.js'

const router = epxress.Router()

router.post('/', async(req, res)=>{
    const hotel = new Hotel(req.body)
    try {
      const savedHotel = await hotel.save()
      res.json(savedHotel)
    } catch (error) {
      console.log(error)
    }
})

export default router