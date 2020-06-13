import express from "express";
import cors from "cors";
import morgan from "morgan";
import { errors } from "celebrate";

import routes from "../api/routes";

export default async ({ app }) => {
  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.get("/", (req, res) => {
    // Use the scope to resolve the message service.
    res.json({
      message: "Welcome to Sample Routes"
    });
  });

  await routes({ app });

  app.use((req, res, next) => {
    const err = new Error("Route Not Found");
    err.status = 404;
    next(err);
  });

  app.use(errors());
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
        stack: err.stack
      }
    });
  });

  return app;
};
