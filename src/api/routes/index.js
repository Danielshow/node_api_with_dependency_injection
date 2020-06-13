import sampleRoute from "./sampleRoute";

export default async ({ app }) => {
  app.use("/api/v1", sampleRoute);
};
