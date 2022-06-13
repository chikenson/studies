const express = require('express')


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let storage = []

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/profile', function (req, res, next) {
    storage.push(req.body)

    res.status(201).send("User created")
})

app.get('/user/:name', function (req, res) {
    const user = storage.find((item)=> item.name === req.params.name)

    if(user) {
        res.status(200).send(user)
    }
    else {
        res.status(404).send('user not found')
    }
    
  })

app.get('/list', (req, res) => {
    res.status(200).send(storage)
  })

app.delete('/delete/:name', function (req, res) {
    const user = storage.find((item)=> item.name === req.params.name)

    if(user) {
      storage = storage.filter(item => item.name !== req.params.name)
        res.status(200).send('Profile is delete')
    }
    else{
      res.status(410).send('User not found')
    }

  })
