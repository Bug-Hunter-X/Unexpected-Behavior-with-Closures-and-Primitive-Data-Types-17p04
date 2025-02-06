function foo(a, b) {
  return a + b;
}

function bar() {
  let x = 10;
  let y = 20;
  return foo(x, y);
}

let result = bar();
console.log(result); // Expected output: 30