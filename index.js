const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()
const PORT = 5000
const villagerList = require("./villagerList.json")


app.get("/villagers", cors(), (request, response) => {
  response.send(villagerList)
})
// villagerList.forEach(villager =>{
//   console.log(villager)
// })

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))