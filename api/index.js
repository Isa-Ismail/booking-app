import express from 'express'
import mongoose from 'mongoose'
import Hotel from './models/Hotel.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

try {
  mongoose.connect(process.env.MONGO).then(()=>{
    console.log('mongo connected')
  })
} catch (error) {
  console.log(error)
}

//middleware
app.use(express.json())
app.post('/', async(req, res)=>{
  const hotel = new Hotel(req.body)
  try {
    const savedHotel = await hotel.save()
    res.json(savedHotel)
  } catch (error) {
    console.log(error)
  }
})

app.listen(8000, ()=> {
  console.log('back connected')
})