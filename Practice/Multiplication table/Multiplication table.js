// Multiplication table

// Variables
var table = {},
    a,
    b,
    arr = [],
    arr2 = [],
    result;

// Generation multiplication tables
for (var i = 1; i <= 10; i++) {
  table[i] = {};
  for (var j = 1; j <= 10; j++) {
    table[i][i + " * " + j] = i * j;
  }
}

// Print the entire table
function getValues(obj){
  for (var key in obj){
    if ( typeof(obj[key]) === 'object' ){
      getValues(obj[key]);
    }
    else{
      console.log(key + ' = ' + obj[key]);
    }
  }
}

// processing lines
function actionWithAString(string){
  arr = string.split('*');
  result = parseInt(arr[0]) * parseInt(arr[1]);
  console.log( arr[0] + " * " + arr[1] + " = " + result );
}

// processing transmitted value
function getPythagoras(value){
  if (arguments.length > 1){ // Failed if passed more than one option
    console.log('Enter the correct value!')
  } else if (arguments.length === 1) { // if passed one option
    if (typeof(arguments[0]) === 'string' ){ // If passed string
      actionWithAString(arguments[0])
    } else { // If passed object
      for (var key in value) {
        a = value[key];
        if (key == 0 || key == 1) {
          arr2.push(a)
        }
      }
      if (typeof(a) === 'string') { //if the value of the key - a string
        actionWithAString(a)
      } else if (key == 0 || key == 1) {
        result = parseInt(arr2[0]) * parseInt(arr2[1]);
        console.log( arr2[0] + " * " + arr2[1] + " = " + result )
      }else if (typeof(a) === 'number') { // if the value of the key - a number
        for (key in table[a]) {
          console.log(key + " = " + table[a][key]);
        }
      } else { // if the value of the key - an object
        result = parseInt(a[0]) * parseInt(a[1]);
        console.log( a[0] + " * " + a[1] + " = " + result )
      }
    }
  } else { // if nothing is passed
    getValues(table)
  }
}

getPythagoras();
getPythagoras({ factor: 2 });
getPythagoras("9 * 9");
getPythagoras([5, 7]);
getPythagoras({ exp: '9 * 9' });
getPythagoras({ values: [5, 7] });