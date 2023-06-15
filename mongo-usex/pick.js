const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected 🏗️  To MongoDB..."))
  .catch((err) => console.error("Could Not Connect 🚫 To MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function getPublished() {
  return await Course.find({ isPublished: true })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
}

async function run() {
    const courses = await getPublished();
    console.log(courses);
}

run();
