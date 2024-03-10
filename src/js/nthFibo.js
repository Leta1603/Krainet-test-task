// Напиши функцию, которая при заданном числе n (n >= 1) возвращает n-е число в последовательности Фибоначчи.
function nthFibo(n) {
  let a = 1;
  let b = 0;
  if (n >= 1) {
    for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
  }

  return b;
}

console.log(nthFibo(4));
