import express from "express";
import bodyParser from "body-parser";
/*
Use dynamic routes to render the posts.

Step 1: Load data from the Json file named posts-storage

Step 2: Route 3000/ will display a list of posts with the title and the first 100 characters of the content.

Step 3: Route 3000/posts/:id will display the full content of the post with the corresponding id.

Step 4: To create, users need to click on Create a Post and fill in the form.

Step 5: The form will redirect user to their new post.

Step 6: The new post will be saved in the posts-storage file.

Step 7: To edit it, users need to go to the post and click on Edit.

*/
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/create", (req, res) => {
  res.render("form.ejs");
 });
app.post("/form/submit", (req, res) => {
  res.render("index.ejs", {

  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});