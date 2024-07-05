if (process.env.NODE_ENV !== 'production') require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const sendEmail = require("./controllers/emailController");

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(cors());

const PORT = process.env.PORT_NO || 5000;

app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}!`);
})

app.get("/", (req, res) => {
    res.json({
        message: "Welcome"
    })
})

//Handle email sending and response
app.post("/email", sendEmail);

app.get("*", (req, res) => {
    res.status(404).json({
        msg: "Route does not exist!"
    })
})