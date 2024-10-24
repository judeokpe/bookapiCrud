import express from 'express'
import authorRouter from "./routes/author.router"
import bookRouter from './routes/books.routes'
const app = express()

app.use(express.json())

app.get('/home', (req, res)=>{
    res.send("HomePage")
})

app.use("/authors", authorRouter)
app.use("/books", bookRouter)






const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server is running on port  ${port}`)
})