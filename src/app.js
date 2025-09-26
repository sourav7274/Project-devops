import express from  'express'

const app = express()

app.get('/',(req,res) =>{
    res.status(200).send("Heloo from project api")
})

export default app