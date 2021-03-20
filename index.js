const fs = require("fs");
const path = require("path");

//Static path for while
const musicPath = path.resolve(
  "..",
  "..",
  "..",
  "D:",
  "Musics",
  "Músicas",
  "Rap",
  "Nacional"
);

//Reading folder itens
const musicDir = fs.readdirSync(musicPath);

//Separe musics
const musics = musicDir.map((item) => {
  return item.split("-");
});

console.log(musics);

//https://nodejs.dev/learn/working-with-folders-in-nodejs
