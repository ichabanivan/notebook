var fizz = 3,
    buzz = 5;

for (var i = 1; i < 101; i++) {
  if (!(i % fizz) && !(i % buzz)) {
    console.log("FizzBuzz");
  }
  else if (!(i % buzz)) {
    console.log("Buzz");
  }
  else if (!(i % fizz)) {
    console.log("Fizz");
  }
  else {
    console.log(i);
  }
}