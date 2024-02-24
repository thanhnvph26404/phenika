import { signinSchema } from "../schemas/auth.js";
import User from '../model/auth.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    try {
        console.log(req.body);
        const { name, userName, password } = req.body
    const userExists = await User.findOne({ userName })
    if (userExists) {
        return res.status(400).json({
            message: 'Tên đăng nhập đã tồn tại'
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        name,
        userName,
        password: hashedPassword
    })
    const token = jwt.sign({ _id: user._id }, '123456')
    
    return res.status(201).json({
        message: 'Đăng kí thành công',
        token,
        user: {
            _id: user._id,
            name: user.name,
            userName: user.userName
        }
    })
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
    
}
export const signin = async (req, res) => { 
    try {
        const { userName, password } = req.body
        const { error } = signinSchema.validate({ userName, password }, { abortEarly: false })
        if (error) {
            const errors = error.details.map((error) => error.message)
            return res.status(400).json({
                message: errors
            })
        }
        const user = await User.findOne({ userName })
        if (!user) {
            return res.status(400).json({
                message: 'Tài khoản không tồn tại'
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) { 
            return res.status(400).json({ message: 'Mật khẩu không khớp' })
        }

        const token = jwt.sign({ _id: user._id }, '123456')
        const { password: excludedPassword, ...userData } = user
        res.status(200).json({
            data: userData,
            accessToken: token
        })
        
    } catch (error) {
        return res.status(400).json(error)
    }
}