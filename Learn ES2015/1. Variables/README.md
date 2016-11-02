# Переменные: let, var, const

В ES-2015 предусмотрены новые способы объявления переменных: через let и const вместо var.

## let

- Переменная, объявленная через let, видна только в рамках блока {...}, в котором объявлена.

```js
let applesLet = 5; // (*)

if (true) {
  let applesLet = 10;

  console.log(applesLet); // 10 (внутри блока)
}

console.log(applesLet); // 5 (снаружи блока значение не изменилось)
```

- Переменная let видна только после объявления. До объявления их вообще нет.

```js
console.log(b); // Uncaught ReferenceError: b is not defined
let b = 5;
```

- Заметим также, что переменные let нельзя повторно объявлять. То есть, такой код выведет ошибку:

```js
let a = 5;
let a = 15; // Uncaught SyntaxError: Identifier 'a' has already been declared
```

- Это – хоть и выглядит ограничением по сравнению с var, но на самом деле проблем не создаёт. Например, два таких цикла совсем не конфликтуют:

```js
// Каждый цикл имеет свою переменную i
for(let i = 0; i<10; i++) { /* … */ }
for(let i = 0; i<10; i++) { /* … */ }
```

- При объявлении внутри цикла переменная i будет видна только в блоке цикла. Она не видна снаружи. 
- При использовании в цикле, для каждой итерации создаётся своя переменная.

```js
var buttonsLet = document.querySelectorAll('button');

for (let i = 0; i < buttonsLet.length; i++) {
  var buttonLet = buttonsLet[i];
  buttonLet.innerText = i;
  buttonLet.onclick = function(e) {
    console.log(i);
  };
}
```

## var

- Переменная, объявленная через var, видна везде в функции.

```js
var applesVar = 5;

if (true) {
  var applesVar = 10;

  console.log(applesVar); // 10 (внутри блока)
}

console.log(applesVar); // 10 (снаружи блока то же самое)
```

- Переменные var существуют и до объявления. Они равны undefined:

```js
console.log(c); // undefined
var c = 5;
```

- Переменная var – одна на все итерации цикла и видна даже после цикла:

```js
for(var i=0; i<10; i++) { /* … */ }
console.log(i); // 10
```

- Переменная i создается глобально, и будет выводиться 5

```js
var buttonsVar = document.querySelectorAll('button');

for (var j = 0; j < buttonsVar.length; j++) {
  var buttonVar = buttonsVar[j];
  buttonVar.innerText = j;
  buttonVar.onclick = function(e) {
    console.log(j);
  };
}
```

## const

- Объявление const задаёт константу, то есть переменную, которую нельзя менять:

```js
const APPLE = 5;
APPLE = 10; // Uncaught TypeError: Assignment to constant variable.
```

- В остальном объявление const полностью аналогично let, но задавать значение необходимо при обьявлении иначе будет ошибка.

```js
const APPLE; // Uncaught SyntaxError: Missing initializer in const declaration
```

- Заметим, что если в константу присвоен объект, то от изменения защищена сама константа, но не свойства внутри неё:

```js
const MATH = {
  PI: 3.14159
};

MATH.PI = 3.15; // Допустимо
MATH = 3.15; // Нельзя, будет ошибка
```

- Константы, которые жёстко заданы всегда, во время всей программы, обычно пишутся в верхнем регистре. Например: 

```js 
const ORANGE = "#ffa500";
```

- Большинство переменных – константы в другом смысле: они не меняются после присвоения. Но при разных запусках функции это значение может быть разным. Для таких переменных можно использовать const и обычные строчные буквы в имени.

