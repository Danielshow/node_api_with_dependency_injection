import { createContainer, asClass } from "awilix";
import config from "../config";
import SampleService from "../services/SampleService";

export default async ({ app }) => {
  const container = createContainer();
  container.register({
    sampleService: asClass(SampleService).scoped()
  });

  app.use((req, res, next) => {
    req.authUrl = config.authUrl;
    console.log(config.authUrl);
    req.scope = container.createScope();
    // based on the query string, let's make a user..
    req.scope.register({
      // add anything reusable across services
    });

    return next();
  });
};
