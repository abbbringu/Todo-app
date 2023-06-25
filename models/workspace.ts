import { Schema, model, models } from "mongoose";

const WorkspaceSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  color: {
    type: String,
    required: [true, "color is required."],
  },
  list: {
    type: [
      {
        title: String,
        done: Boolean,
      },
    ],
    required: [false, "list is not required"],
  },
});

const Workspace = models.Workspace || model("Workspace", WorkspaceSchema);

export default Workspace;
