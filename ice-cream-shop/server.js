const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./server/config/db");

// Load env vars
dotenv.config({ path: "./server/config/config.env" });

// Connect to DB
connectDB();

//Route files
const flavours = require("./server/routes/flavours");

const app = express();

// Body parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/flavours", flavours);

const PORT = process.env.PORT || 4000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server $ exit process
  server.close(() => process.exit(1));
});
