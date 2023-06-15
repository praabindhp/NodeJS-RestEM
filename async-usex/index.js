console.log("Before"); // 1
const inside = readInside(1); // Output : undefined
console.log(inside); // 2

console.log("After"); // 3

function readInside(id) {
    setTimeout(() => {
        console.log("Reading Inside"); // 4
        return { id: id, name: `Inside The ${id}` }; // No Value
    }, 2000);
}