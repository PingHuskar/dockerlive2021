const express = require('express');
const sequelize = require('./util/database');
const User = require('./models/users');

const app = express()
app.use(express.json())

// const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello Docker World!</h1>')
})

app.get('/author', (req, res) => {
    res.send('<h1>Chadin Chaipornpisuth</h1>')
})

app.post('/users',async (req,res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
        })
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json(error)
    }
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// sync the models with current db
sequelize.sync({force:false})
.then(()=> app.listen(process.env.EXTERNALPORT))
.catch(err=> log.error(err))