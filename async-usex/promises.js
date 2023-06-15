const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success 💫"); // Pending => Resolved, Fulfilled
    reject(new Error("Error 💥")); // Pending => Rejected
  }, 2000);
});

// p.then((value) => {console.log(value);});
p.then((value) => console.log(value)).catch((err) => console.log(err.message));
