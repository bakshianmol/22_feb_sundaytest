//Ques1. Write a JavaScript program to display the reading status
// (i.e. display book name, author name and reading status) of the following books.

var display = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (var i = 0; i < display.length; i++) {
  var books = "'" + display[i].title + "'" + " by " + display[i].author + ".";
  if (display[i].readingStatus) {
    console.log("Already read " + books);
  } else {
    console.log("You still need to read " + books);
  }
}
