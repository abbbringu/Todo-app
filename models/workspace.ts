import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
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
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
