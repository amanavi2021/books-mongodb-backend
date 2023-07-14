const mongoose= require("mongoose");
const app = require('./app');
const DB_HOST= "mongodb+srv://amanavi:ngBkQhJAPC3axmBF@cluster0.ysnxuq2.mongodb.net/books_reader?retryWrites=true&w=majority"

mongoose.set("strictQuery", true);

mongoose.connect(DB_HOST).
then(() => {
app.listen(3000)
  // () => {
  // console.log("Server running. Use our API on port: 3001")
})
.catch(error => {
  console.log(error.message);
  process.exit(1);
})







