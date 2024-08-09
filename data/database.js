import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbname: "clinic",
    })
    .then((c) => console.log(`Database connected ${c.connection}`))
    .catch((e) => console.log(e));
};
