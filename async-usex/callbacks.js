console.log("Before"); // 1

readInside(1, function (inside) {
  console.log(inside);
  const box = inside.name;
  readBox(box, function (box) {{
    console.log(box);
    }});
});

console.log("After"); // 2

function readInside(id, callback) {
  setTimeout(() => {
    console.log("Reading Inside"); // 3
    callback({ id: id, name: `Inside The ${id}` }); // 4
  }, 2000);
}

function readBox(box, callback) {
  setTimeout(() => {
    console.log("Reading Box"); // 5
    callback( ["Inside A", "Inside B", "Inside C"] );
  }, 2000);
}
