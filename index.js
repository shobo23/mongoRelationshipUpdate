const Express = require("express");
const connectDb = require("./config/billConfiq");
const morgan = require("morgan");
const userRoute = require("./routes/userRoutes");
const detailsRoute = require("./routes/detailsRoutes");

require("dotenv/config");

const { PORT } = process.env;

const app = Express();
app.use(Express.json());
app.use(morgan("dev"));
connectDb();

app.use("/user", userRoute);
app.use("/details", detailsRoute);

app.listen(PORT, () => {
  console.log(new Date().toLocaleDateString(), PORT);
});
