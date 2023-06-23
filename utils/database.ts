import mongoose from "mongoose";

let isConnected = false; // track the connection
function DB_values() {
  const URI = process.env.MONGODB_URI || "";
  const NewUrlParser = true;
  const UnifiedTopology = true;
  return { URI, NewUrlParser, UnifiedTopology };
}
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(DB_values().URI, {
      dbName: "Uvumi_todo",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
