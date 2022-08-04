import epxress from 'express'
import { register, getAllUsers, getUserById } from '../controllers/auth.js'

const router = epxress.Router()

router.get('/', getAllUsers)

router.get('/:id', getUserById)

router.post('/', register)

export default router