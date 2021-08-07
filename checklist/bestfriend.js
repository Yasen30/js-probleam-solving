function bestfriend(names) {
  char = names[0].length;
  console.log(char);
  unique = "";
  for (const name of names) {
    if (char < name.length) {
      unique = name;
    }
  }
  return unique;
}

const names = ["Emran", "Khaled", "Topu", "jahidul", "islam"];
const result = bestfriend(names);
console.log("your result is", result);
