const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random(	);
    if (randomNumber > 0.5) {
      resolve(randomNumber); // Natija qaytarish
    } else {
      reject("Xato yuz berdi"); // Xato qaytarish
    }
  }, 2000);
});

promise.then((result) => {
    console.log("Natija:", result);
  })