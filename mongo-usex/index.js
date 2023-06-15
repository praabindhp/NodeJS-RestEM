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

// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// lte (less than or equal to)
// in
// nin (not in)

async function createCourse() {
  const course = new Course({
    name: "C Programming Course",
    author: "Pradeep Kumar",
    tags: ["c", "algorithm", "logic"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
  console.log("Course Saved Successfully 🎉");
}

// createCourse();

author = "Pradeep Kumar";
async function getCoursesByAuthor(author) {
  const courseauthor = await Course.find({ author: `${author}` });
  console.log("Courses By Author : ", author);
  console.log(courseauthor);
}

// getCoursesByAuthor(author);

async function getCourses() {
  const pageNumber = 1;
  const pageSize = 10;
  const courses = await Course
    // .find({author: "Pradeep Kumar", isPublished: true})
    // Starts With Praabindh
    .find({ author: /^Praabindh/ })

    // Ends With Praabindh
    .find({ author: /Praabindh$/i })

    // Contains Praabindh
    .find({ author: /.*Praabindh.*/i })

    .or([{ author: "Praabindh Pradeep" }, { isPublished: true }])
    .skip((pageNumber - 1) * pageSize)
    .limit(10)
    .sort({ name: 1 })
    .count();
  // .select({ name: 1, tags: 1 });
  console.log(courses);
}

// getCourses();

async function updateCourse(id) {
  const course = await Course.findById(id);
  if (!course) return;

  course.isPublished = true;
  course.author = "Bindhu Krishnan";
  
  const result = await course.save();
  console.log(result);
};

updateCourse('648aba5b1693b3f5abe0dee8');