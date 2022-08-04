import User from "../models/User.js"
import bcrypt from "bcrypt"

export const getAllUsers = async( req, res, next) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        next(err)
    }
}

export const getUserById = async( req, res, next) => {
    try {
        const users = await User.findById(req.params.id)
        res.json(users)
    } catch (err) {
        next(err)
    }
}

export const register = async(req, res, next) => {
    
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
    
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            city: req.body.city,
            phone: req.body.phone,
            country: req.body.country,
            password: hash
        })
    
        await user.save()
    
        res.json({message: 'User created, please Log in'})

    } catch (err) {
        next(err)
    }
}