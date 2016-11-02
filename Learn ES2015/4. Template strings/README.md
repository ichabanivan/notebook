# Template strings

## Строки-шаблоны

- Добавлен новый вид кавычек для строк:

```js
let str = `обратные кавычки`;
```

- В них разрешён перевод строки.

```js
alert(`моя
  многострочная
  строка`);
```
```js
function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}

createEmail('john@mail.com', 'jane@mail.com', 'Hello', 'How are you doing?');
```

- Заметим, что пробелы и, собственно, перевод строки также входят в строку, и будут выведены.
- Можно вставлять выражения при помощи ${…}.

```js
'use strict';
let apples = 2;
let oranges = 3;

alert(`${apples} + ${oranges} = ${apples + oranges}`); // 2 + 3 = 5
```

- Как видно, при помощи ${…} можно вставлять как и значение переменной ${apples}, так и более сложные выражения, которые могут включать в себя операторы, вызовы функций и т.п. Такую вставку называют «интерполяцией».

```js
function greet(name){
    console.log((`Hello ${name}`).toUpperCase)
}
great('Bill') // HELLO BILL
```
```js
function add(x, y) {
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add('5', '7');
```
```js
let name = 'Bill';
console.log(upperName`Hello ${name}`);

function upperName(literals, ...values) {
    return literals[0] + value.toUpperCase(); // Hello BILL
}
```

## Полезные методы

Добавлены ряд полезных методов общего назначения:

- str.includes(s) – проверяет, включает ли одна строка в себя другую, возвращает true/false.
- str.endsWith(s) – возвращает true, если строка str заканчивается подстрокой s.
- str.startsWith(s) – возвращает true, если строка str начинается со строки s.
- str.repeat(times) – повторяет строку str times раз.

Конечно, всё это можно было сделать при помощи других встроенных методов, но новые методы более удобны.
