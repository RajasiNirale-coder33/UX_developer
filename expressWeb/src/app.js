const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8000

// public static path
const static_path = path.join(__dirname, "../public")

app.use(express.static(static_path))

app.get("/", (req, res) => {
  res.send('Welcome to Home page')
})

app.get("/about", (req, res) => {
    res.send('Welcome to About page')
  })

app.get("/weather", (req, res) => {
res.send('Welcome to weather page')
})

app.get("*", (req, res) => {
res.send('404 page not found')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})