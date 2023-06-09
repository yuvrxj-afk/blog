const express = require('express')
const cors = require('cors')
const app = express()
const User = require('./models/userModel.js')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const uploadMiddleware = multer({ dest: 'uploads/' })
const fs = require('fs')
const Post = require('./models/postModel.js')

dotenv.config()
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URI)

const secret = "nothing"

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashed = bcrypt.hashSync(password, 10)
    try {
        const userDoc = await User.create({ username, password: hashed })
    } catch (error) {
        res.status(400).json(error)
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body

    const userDoc = await User.findOne({ username })

    const checked = bcrypt.compareSync(password, userDoc.password)
    if (checked) {
        jwt.sign({ username, id: userDoc.id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            })
        })
    }
    else {
        res.status(400).json("wrong credentials!")
    }

})

app.get('/profile', (req, res) => {
    const { token } = req.cookies
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info)
    })
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok')
})

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    const { originalname, path } = req.file
    const parts = originalname.split('.')
    const extension = parts[parts.length - 1]
    const newPath = path + '.' + extension
    fs.renameSync(path, newPath)

    const { title, summary, content } = req.body
    const postDoc = await Post.create({
        title, summary, content, cover: newPath
    })

    res.json(postDoc)
})

app.listen(4000, () => {
    console.log('running');
})

