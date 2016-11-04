var fizz = 3,
    buzz = 5;

for (var i = 1; i < 101; i++) {
  if (i % fizz == 0 && i % buzz == 0) {
    console.log("FizzBuzz");
  }
  else if (i % buzz == 0) {
    console.log("Buzz");
  }
  else if (i % fizz == 0) {
    console.log("Fizz");
  }
  else {
    console.log(i);
  }
}