console.log("Before"); // 1

// Using Async - Await

async function insideBox() {
  try {
    const inside = await readInside(1);
    const box = await readBox(inside.name);
    console.log(box);
  } catch (err) { 
    console.log('Error', err.message);
  }
}

insideBox();

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
    //   resolve(["Inside A", "Inside B", "Inside C"]); // 6
    reject(new Error("Could Not Get Inside The Boxes 🗳"));
    }, 2000);
  });
}