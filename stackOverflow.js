let counter = 0;

function increment() {
  counter++;

  console.log(counter);
  return increment();
}

try {
  increment();
} catch (e) {
  console.log("Error:", e.message);
  console.log("Counter:", counter);
}
