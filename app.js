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
    res.send('saved')
})



app.get('/user/:name', function (req, res) {
    const user = storage.find((item)=> item.name === req.params.name)

    if(user) {
        res.send(user)
    }
    else {
   res.send('user not found')
    }
    
  })



app.get('/list', (req, res) => {
    res.send(storage)
  })



  app.delete('/delete/:name', function (req, res) {

    storage = storage.filter(item => item.name !== req.params.name)

    
    res.send('Profile is delete')

    
  })
