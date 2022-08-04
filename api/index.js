import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import hotelRoute from './routes/hotels.js'
import authRoute from './routes/auth.js'

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

app.use('/api/hotels', hotelRoute)
app.use('/api/auth', authRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'something went wrong'

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})

app.listen(8000, ()=> {
  console.log('back connected')
})