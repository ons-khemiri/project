const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB");
connectDB();
app.use(express.json());
app.use("/api/user", require("./routes/user"));
app.use("/api/product", require("./routes/product"));
app.use("/api/comment", require("./routes/comment"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/cart",require("./routes/cart"));
app.use("/api/agent",require("./routes/agent"));
app.use("/api/order",require("./routes/order"));
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
	err ? console.error(err) : console.log(`Server is running on port ${PORT} ..`)
)