const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
app.use(morgan(":method :url :response-time"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes

app.use("/ping", (req, res)=>{res.send("OK")})

app.use(require("./routes/metrics"));

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
