// const p = Promise.resolve({ id: 1 });
// p.then((result) => console.log(result));

// const q = Promise.reject(new Error("Error 💥"));
// q.catch((err) => console.log(err.message));

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Operation - 1");
        resolve(1);
        // reject(new Error('Something Failed 💥'));
    }, 2000);
})

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Async Operation - 2");
        resolve(2);
    }, 2000);
})

// Promise.all([p1, p2])
Promise.race([p1, p2])
.then(result => console.log(result))
.catch(err => console.log(err))