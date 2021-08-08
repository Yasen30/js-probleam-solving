function bestfriend(names) {
  const charLength = names[0].length;
  const largest = "";
  for (const name of names) {
    if (charLength < name.length) {
      largest = name;
    }
  }
  return largest;
}

const names = ["Emran", "Khaled", "Topu", "jahidul", "islam"];
const result = bestfriend(names);
console.log("your result is", result);
