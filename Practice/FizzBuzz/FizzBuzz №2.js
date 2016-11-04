var fizz = 3,
    buzz = 5;

for (var i = 1; i < 101; i++)
  i % fizz == 0 && i % buzz == 0 ?  console.log("FizzBuzz") : i % buzz == 0 ?  console.log("Buzz") : i % fizz == 0 ?  console.log("Fizz") : console.log(i);