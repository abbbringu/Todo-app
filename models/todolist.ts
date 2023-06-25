import { Schema, model, models } from "mongoose";

const TodolistSchema = new Schema({
  workspace: {
    type: Schema.Types.ObjectId,
    ref: "Workspace",
  },
  list: [
    {
      title: String,
      done: Boolean,
    },
  ],
});

const Todolist = models.Todolist || model("Todolist", TodolistSchema);

export default Todolist;
