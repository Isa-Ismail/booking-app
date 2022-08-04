import epxress from 'express'
import Hotel from '../models/Hotel.js'

const router = epxress.Router()

router.get('/', async(req, res, next) => {
    try {
      const hotels = await Hotel.find()
      res.json(hotels)
    } catch (err) {
      next(err)
    }
})

router.post('/', async(req, res, next)=>{
    const hotel = new Hotel(req.body)
    try {
      const savedHotel = await hotel.save()
      res.json(savedHotel)
    } catch (err) {
      next(err)
    }
})

router.put('/:id', async(req, res, next) => {
    try {
      const hotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body } )
      const updatedHotel = await hotel.save()
      res.json(updatedHotel)
    } catch (err) {
      next(err)
    }
})

router.delete('/:id', async(req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndDelete( req.params.id )
    res.json({message: 'hotel data deleted'})
  } catch (err) {
    next(err)
  }
})

export default router