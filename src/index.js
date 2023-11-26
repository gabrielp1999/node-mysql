const express = require("express");
const app = express();

const conn = require("./db/config");
const booksRouter = require("./routes/books.routes");

app.use(express.json());
app.use('/books', booksRouter);


app.get("/", (req,res) => {
    return res.send({ message: "api ok" });
})



conn.connect((err) => {
    if(err){
        console.log('error connecting to mysql', err);
        return;
    }

    console.log("connected to mysql");
    app.listen(3001, () => {
     console.log("app running:", 3001);
    })
})

