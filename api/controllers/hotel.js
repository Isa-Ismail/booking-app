import Hotel from "../models/Hotel.js"

export const getAllHotel = async(req, res, next) => {
    try {
        const hotels = await Hotel.find()
        res.json(hotels)
      } catch (err) {
        next(err)
      }
}

export const getHotelByID = async(req, res, next) => {
  try {
      const hotel = await Hotel.findById(req.params.id)
      res.json(hotel)
    } catch (err) {
      next(err)
    }
}

export const createHotel = async(req, res, next) => {
    const hotel = new Hotel(req.body)
    try {
      const savedHotel = await hotel.save()
      res.json(savedHotel)
    } catch (err) {
      next(err)
    }
}

export const updateHotel = async(req, res, next) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body } )
        const updatedHotel = await hotel.save()
        res.json(updatedHotel)
      } catch (err) {
        next(err)
    }
}

export const deleteHotel = async(req, res, next) => {
    try {
        const hotel = await Hotel.findByIdAndDelete( req.params.id )
        res.json({message: 'hotel data deleted'})
      } catch (err) {
        next(err)
    }
}