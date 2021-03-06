import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

// Routes
import { currentUserRouter } from "./routes/current-user";
import { signupRouter } from "./routes/signup";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";

import { errorHandler, NotFoundError } from "@osorg/common-middleware";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
  })
);

// Routes
app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

// checks incoming request for route that doesn't exist
// throwing a new error for the errorHandler to deal with
app.all("*", () => {
  throw new NotFoundError();
});

// Error handler middleware
app.use(errorHandler);

export { app };
