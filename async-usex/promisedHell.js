console.log("Before"); // 1

// readInside(1, function (inside) {
//   console.log(inside);
//   const box = inside.name;
//   readBox(box, function (box) {
//     {
//       console.log(box);
//     }
//   });
// });

// Promise Based Approach

readInside(1)
  .then((inside) => {
    console.log(inside);
    readBox(inside.name)
    .then((box) => {
        console.log(box);
    })
  })
  .catch((err) => console.log(err.message));

console.log("After"); // 2

function readInside(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading Inside"); // 3
      resolve({ id: id, name: `Inside The ${id}` }); // 4
    }, 2000);
  });
}

function readBox(box) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading Box"); // 5
      resolve(["Inside A", "Inside B", "Inside C"]); // 6
    }, 2000);
  });
}
