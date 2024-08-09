import { app } from "./index.js";

import { connectDB } from "./data/database.js";

connectDB();

app.listen(5000, () => {
  console.log("connected express");
});
