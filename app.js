import express from "express";

import { PORT, NODE_ENV } from "./config/env.js";

import userRouter from "./routes/user.routes.js";

import authRouter from "./routes/auth.routes.js";

import subscriptionRouter from "./routes/subscription.routes.js";

import connectToDB from "./db/mongodb.js";

import errorMiddleware from "./middlewares/error.middleware.js";

import cookieParser from "cookie-parser";
import helmet from "helmet";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";

const app = express();

// Built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(arcjetMiddleware);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflows", workflowRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to the subscription tracker API");
});

app.listen(PORT, async () => {
  console.log(`${NODE_ENV} Server running on http://localhost:${PORT}`);

  await connectToDB();
});

export default app;
