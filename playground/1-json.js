const fs = require("fs");

// const book = {
//   title: "Naruto",
//   author: "Kishimoto",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.author);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.title = "afiav";
user.author = 20;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
