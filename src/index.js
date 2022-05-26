const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/watch", (req, res) => {
    res.render("index.ejs", { video: req.query.v })
})

app.listen(8080)