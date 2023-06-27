import { Schema, model, models } from "mongoose";

const TodoSchema = new Schema({ title: String, done: Boolean });

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
    type: [TodoSchema],
    required: [true, "list is required"],
  },
});

const Workspace = models.Workspace || model("Workspace", WorkspaceSchema);

export default Workspace;
