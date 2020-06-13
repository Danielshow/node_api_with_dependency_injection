import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import awilixLoader from "./awilix";

export default async ({ app }) => {
  // add all loaders so as to to index app.js
  await awilixLoader({ app });
  await expressLoader({ app });
  await mongooseLoader();
  console.log(`database connected`);
};
