# JavaScript

```js
"use strict";
// этот код будет работать по современному стандарту ES5


// Типы данных

// Числа

// 12 12.3 3е5 3е-5
1/0                      // Infinity
                         // Infinity больше любого числа
0/0                      // NaN ничему не равно даже себе
isNaN()                  // говорит число ли это
isNaN(NaN)               // true
isFinite()               // функция которая на NaN и Infinity выдает false
"12" + 0                 // 120
+"12"                    // 12
parseInt("12px")         // 12
// parseFloat (12.3.4.5) // 12.3 возвращает дробное число
parseInt("0xFF")         // 255
parseInt("abcd")         //NaN
parseInt("abcd", 16)     // 43981 

// Поддержимает СС до 36

1234456789..toString(36)  // "keyoyd" нужно 2 точки одна обьект а перед ней показывает что число не дробное
parseInt("kf12oi", 36)    // 1234456789
x = 1234456789
x.toString(36)            // "keyoyd"

// Строки

var str = "String"
str[0] // S
str.charAt[0] // "" если строки нет

// Строки не изменяемые но можно 

str = "!" + str         // Строки в кодировке юникод АБВ.....Яабв....яё
str.charCodeAt(0)       // Юникод 0 символа в строке
string.fromCharCode(33) // Из юникода в  символ


// \' одинарная кавычка байт 0x27
// \" двойная кавычка байт 0x22
// \? вопросительный знак байт 0x3f
// \\ обратный слеш байт 0x5c
// \0 нулевой символ  байт 0x00
// \a звуковой сигнал байт 0x07
// \b забой байт 0x08
// \f перевод страницы - новая страница байт 0x0c
// \n перевод строки - новая строка байт 0x0a
// \r возврат каретки байт 0x0d
// \t горизонтальная табуляция  байт 0x09
// \v вертикальная табуляция  байт 0x0b
// \nnn произвольное восьмеричное значение  байт nnn
// \xnn произвольное шестнадцатеричное значение байт nn
// \unnnn произвольное Юникод-значение.
// Результатом могут быть несколько символов. кодовая позиция U+nnnn
// \Unnnnnnnn произвольное Юникод-значение.
// Результатом могут быть несколько символов. кодовая позиция U+nn


1 && 2            //2 // Возвращает первый false или последний true
1 || 2            //1 // Возвращает первый true или последний false
0 || 1 && 2 || 3  //2 // из-за приоритетности 0 || (1 && 2) || 3 
i = 0
++i == i++        //true

var str = "Web-developer",  //строка
    number = 1,             // число
    numberSecond = 2.4,
    bool = true,            // boolean
    undef,                  //undefined пустая переменная, не присвоено значение
    nuull = null;           //null, пустота, так можно стереть данные

// Функция в обьекте это метод

var objec = {               // object
    prop: "yo",             // строка
    fu: function() {}       //функция, метод
};

alert(typeof(str));         // Узнаем тип данных елемента

Результатом typeof является строка, содержащая тип:
// Синтаксис оператора: typeof x.
// Синтаксис функции: typeof(x).

typeof undefined    // "undefined"
typeof 0            // "number"
typeof true         // "boolean"
typeof "foo"        // "string"
typeof {}           // "object"
typeof null         // "object"
typeof function(){} // "function"


/* Примитивы */
var str = "Halk Hogan",
    number = 1,
    numberSecond = 2.4,
    bool = true,
    undef,
    nuull = null;

/* Объектные */
var obj = {
        prop: "yo",
        fu: function() {
          alert("Hello")
        }
    },
    regexp = /baba/g,
    func = function() {},
    arr = [1, 2, 3];        //Массив

console.log(typeof func);   //function
console.log(typeof obj);    //object
console.log(typeof regexp); //object
console.log(typeof arr);    //object

//Таблица истинности для &:

| a | b | a & b |
+-------+-------+
| 0 | 0 |   0   |
| 0 | 1 |   0   |
| 1 | 0 |   0   |
| 1 | 1 |   1   |


//Таблица истинности для ||:

| a | b | a | b |
+-------+-------+
| 0 | 0 |   0   |
| 0 | 1 |   1   |
| 1 | 0 |   1   |
| 1 | 1 |   1   |


//Таблица истинности для исключающего ИЛИ:

| a | b | a ^ b |
+-------+-------+
| 0 | 0 |   0   |
| 0 | 1 |   1   |
| 1 | 0 |   1   |
| 1 | 1 |   0   |

//Таблица истинности для НЕ:

| a | ~a   |
+---+------+
| 0 |  1   |
| 1 |  0   |

obj.prop = 'loftblog';  // Можно изменять свойства
console.log(obj);       // object
arr[2] = 24;            // Переопределяем 2 элемент
console.log(arr);

// Методы можно применить к строке
console.log(str.toUpperCase());


/* Обертки */ //Пользоваться ими не нужно!!!

var num = String('124');        //Строка
new String('12445');            //Это обьект!!! Массив на 5 свойст

var numb = number(124);
console.log(numb);              // Это число!

numb.toString();                // Преобразование числа в строку

num.prop = 'Строка в числе!!!'; //Объект
var numObj = new String('124');
numObj.prop = 2352352;


var statement;      // инструкция, команда
statement = 5 + 2;  // выражение, парсер возвращает результат
var strr = 'gdfgd'; // литерал строки, когда парсеру ничего не надо делать и он вернет то что есть


//ОПЕРАТОРЫ

// арифметические (основные)
2 + 3; // 5 сложения
5 - 4; // 1 вычитания
2 * 2; // 4 умножения
6 / 2; // 3 деления
5 % 2; // 1 остаток отделения


= // оператор присваивания

var i = 2;
var b = 2;

++i; // оператор инкремента
--b; // оператор декремента

++i; // префиксная форма записи   //Сразу добавляется и записывается значение
b++; // постфиксная форма записи  //Возвращается значение старой переменной в момент присвоения

// вызов операторов с присваиванием
var m = 10;
m *= 2;
m /= 2;
m -= 4;
m += 2;
m %= 3;

// оператор запятая
for (var a = 1, b = 2, c = 3; b < 3; b++) {
    console.log(b);
}


// операторы сравнения
var a = 4,
    b = 1;

a < b;  // меньше
a > b;  // больше
a >= b; // больше или равно
a <= b; // меньше или равно

//Забудьте!
a == b; // оператор равенства  0==false
a != b; // оператор не равенства

//Используйте!
a === b; // оператор строго равенства
a !== b; // оператор строго не равенства



alert(сообщение)
// alert выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмёт «ОК».

// Функция prompt принимает два аргумента:
result = prompt(title, default);
// Она выводит модальное окно с заголовком title, полем для ввода текста, заполненным строкой по умолчанию default и кнопками OK/CANCEL.
// Всегда указывайте default
// Второй параметр может отсутствовать. Однако при этом IE вставит в диалог значение по умолчанию "undefined".

result = confirm(question);
// confirm выводит окно с вопросом question с двумя кнопками: OK и CANCEL.
// Результатом будет true при нажатии OK и false – при CANCEL(Esc).


var transport = 'автомобиль',
    compass = 'голова';

//оператор if
if (age === 18) {
    alert('Вы взрослый!!!');
} else if (age === 21) {
    alert('Держите пиво.');
} else if (age === 24) {
    alert('Юность заканчивается!!!');
} else {
    alert('Вам нет 18 лет.')
}

//оператор switch
var a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( 'Я таких значений не знаю' );
}

//оператор ?
(age === 18) ? alert('Вы взрослый!!!'):
    (age === 21) ? alert('Держите пиво.') :
    (age === 24) ? alert('Юность заканчивается!!!') :
    alert('Вам нет 18 лет.')

//логические

//оператор && - и
(transport === 'ноги' && compass === 'голова') ? alert('вы добрались до дома быстро'): alert('пешком идти далековато...');

//оператор || - или
(transport === 'автомобиль' || transport === 'велосипед') ? alert('вы добрались до дома быстро'): alert('пешком идти далековато...');

// оператор ! - не
(transport !== 'ноги') ? alert('вы добрались до дома быстро'): alert('пешком идти далековато...');



number = 234.467,
    n = NaN,
    inf = Infinity;

//основные методы
console.log(number.toFixed(2));        // Задает количество чисел после запятой
console.log(number.toExponential());   // Получаем число такого вида 2.34е+2
console.log(number.toPrecision(4));    // Выводит нужное количество чисел (4)
console.log(typeof number.toString()); // Переводит число в строку

//методы и свойства объекта Math
console.log(Math.random());      // Генерирует число от 0 до 1
console.log(Math.random()*10);   // Генерирует число от 0 до 10
console.log(Math.random()*10+5); // Генерирует число от 5 до 15
console.log(Math.max(1,2,3));    // Возвращает самое большое число 3
console.log(Math.min(1,2,3));    // Возвращает самое маленькое число 1
console.log(Math.sqrt(81));      // Вычисление корня
console.log(Math.pow(5, 2));     // Возведение в степень (5 в степени 2)
console.log(Math.floor(number)); // Округляет вниз
console.log(Math.ceil(number));  // Округляет вверх
console.log(Math.round(number)); // Округляет до ближайшего
console.log(Math.PI);            // Выводит число пи

// Округлить и вывести 1 число после запятой
Math.round(1.25 * 10) / 10

1.25.toFixed(1) // округляет до 1 знака после запятой

// Битовые операторы (Используются редко)
12.345^0        // 12
~~ 12.345       // 12

0.1+0.2 // 0.300000000000004

0.1 + 0.2  === 0.3 // false
// Числа хранятся в 64 битном формате IEEE 754

+(0.10 + 0.20).toFixed(2) // Округляем до 2 числа



//NaN Не является числом - число которое нельзя вычислить
console.log(0 / 0);
console.log(NaN === NaN); // false
console.log(isNaN(n)); // true

//Infinity
console.log(1 / 0);       // Положительная бесконечность
console.log(-1 / 0);      // Отрицательная бесконечность
console.log(inf > 33634); // true
console.log(inf + 33634); // Infinity


// Строки
str = '"String" is a data type';
str2 = "\"string\" is a data type", // Екранирование  \"
    longStr = 'длинная\n \tстрока \tкакая-то\n получилась';


console.log(str2.length);              // кол-во символов в строке
var str = "Привет, мир!";
alert( str.length );                   // 12
console.log('hello ' + 'world');       //конкатенация
console.log('hello '.concat('world')); //конкатенация //тоже что и +

console.log(str.charAt(1));     //символ по индексу
console.log(str.charCodeAt(1)); //character code по индексу

//работа с подстроками
//substring(start, end));
//Лучше использовать slice
console.log(str.substring(0, 8)); // начало, конец // Если один аргумент выводи все символы начиная с него // Выведет все символы в интервале 0-8
// slice(start, end) 
console.log(str.slice(-5));       // можно с конца обрезать
console.log(str.slice(2));        // можно со 2 символа
console.log(str.slice(1,2));      // С первой позиции по вторую не включая последний(второй) индекс
console.log(str.slice(1,-1));     // С первой позиции по предпоследний индекс
// substr(start, length) 
console.log(str.substr(14, 4));   // первый начало, второй аргумент кол-во символов

console.log(str.split(' '));      // разбиение на массив между пробелами на отдельные элементы


console.log(str.replace('string', 'number')); // замена
console.log(str.indexOf('a'));                // узнаем индекс по символу в строке (начало первое совпадение)
console.log(str.indexOf('a',2));              // искать со 2 позиции
console.log(str.lastIndexOf('a'));            // узнаем индекс по символу в строке botn c rjywf

var str = "Марсоход пока не обнаружил следы жизни на Красной планете"

str.slice(str.indexOf(" ") +1, str.lastIndexOf(" ")) // пока не обнаружил следы жизни на Красной

var pos = 0;
while (true){
  pos = str.indexOf(target, pos);
  if (pos = -1) break;
  alert(pos);
  pos++
}

console.log(str.toUpperCase()); // к верхнему регистру
console.log(str.toLowerCase()); // к нижнему регистру


// Boolean, null, undefined.


// единственные значения, которые после преобразования в Boolean становятся ложными
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));

// все остальные всегда истинные
console.log(Boolean('sdgsgd'));
console.log(Boolean(534534));
console.log(Boolean(obj));


var obj = {},
    param,
    arr = [1, 2, 3];

var booll = 'str';

if (booll) {
    console.log('Привет ребята!');
}


Пример объявления функции:

function showMessage() {
  alert( 'Привет всем присутствующим!' );
  var b = 5; // Область видимости переменной b только в функции!!!
}
// Вначале идет ключевое слово function, после него имя функции, затем список параметров в скобках (в примере выше он пустой) и тело функции – код, который выполняется при её вызове.
// Объявленная функция доступна по имени, например:
function dofunction(name) {
  console.log("Your name is "+name+"!")
  // argumets[i] // можно перебрать дополнительно переданые аргументы
  // В старфх версия его можно было перезаписывать
}


dofunction(ivan, maria)

function showMessage() {
  alert( 'Привет всем присутствующим!' );
}

showMessage();
showMessage();

function sayHi() {
  alert( "Привет" );
}

alert( sayHi ); // выведет код функции

// код, использующий функции
var elem = createElement();
setHandler(elem);
walkAround();

// Как правило, лучше располагать функции под кодом, который их использует.


Рекурсия 
Степень pow(x, n) через рекурсию

function pow(x, n) {
  if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

alert( pow(2, 3) ); // 8


console.log(param);        //переменная без значения вернет undefined
console.log(obj.parampam); //несуществующее свойство вернет undefined
console.log(arr[7]);       //несуществующий элемент массива вернет undefined




var func = function(arg) {
    console.log(arg);      //если аргумент не передан, то после вызова функции вернет undefined
};

func(); // undefined


// Преобразование типов

// явные преобразования
console.log(typeof String(455));   //в строку
console.log(typeof Number('455')); //в число
console.log(typeof Boolean(0));    // в буль

// быстро в строку
console.log(typeof(23626 + ''));
console.log(23626 + '');

// быстро в число
console.log(typeof(+'23626'));
console.log(+'23626');
console.log(+""); // 0
console.log(+true); //1
console.log(+false); //0

// быстро в boolean
console.log(typeof(!!'24'));
console.log(!!'24');


var num = 777;

// функции и метод
console.log(typeof num.toString());       // в строку
console.log(parseInt("100.24 px", 10));   // в число // Второй параметр Система Счисления
console.log(parseFloat("100.24 px", 10)); // может преобразовать число с плавающей точкой

// Способы создания объекта:
//var obj = new Object();
var obj = {
  sdgsdg : 'str',
  func : function() {
    console.log( this );
  }
};

var prop = 'func';


// console.log(obj.fff || 'name');

obj.ddd = 'Gag 9';
obj.sdgsdg = 'Banan';

// console.log(obj);

var a = {prop: 1}, b = {prop: 2}, c = {prop: 3};


a = b = c = {prop: 'allTheSame'};


// console.log(a, b, c);

var y = obj;

//console.log( y.sdgsdg );

//delete obj.func;

//console.log( obj );

obj.func();

var MYAPP = {

};


var arr = [1, 2, 155, 45 ,46,'str', {} ]; //литерал
var arr2 = new Array(1,2,'str');          // конструктор

//добавление элемента

arr[6999] = 'six';


console.log( arr.length );  //свойство length - последний индекс массива + 1
delete arr[1];              //удаляет указанный элемент массива, но оставляет дырки в виде undefined

// 1 - с какого элемента начинаем, 2 - сколько элементов удаляем
arr.splice(1,1); //удаляет элемент правильно, сдвигая все остальные

//можно задавать свойство length
arr.length = 100;
arr.length = 2;       //обрезает до 2 элемента
arr[arr.length] = 33; //вставляет в конец массива элемент число 33


//многомерный массив
var matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

//console.log( matrix[1][1] );

//методы

var newArr = arr.concat(matrix); //складывает 2 массива и возвращает новый

arr.join(', ') );      //создает из массива строку, разделяя указанным разделителем
arr.push('new2');      //добавляет в конце массива элемент
arr.pop();             //обрезает последний элемент массива
arr.unshift('up_new'); //добавляет в начало массива элемент
arr.shift();           //удаляет первый элемент массива
arr.reverse();         //делает реверс массива
arr.sort();            //сортирует массив, но не правильно
var sliced = arr.slice(1,3);


var i;

// for
var arr = [1,2,3],
len = arr.length;

for ( i = 0 ; i < len ; i++ ) {
  console.log( arr[i] * 2 );
}

// for in

var obj = {
  propp: 'one',
  proppSecond: 'two'
},
prop;


for ( prop in obj ) {
  if ( obj.hasOwnProperty(prop)) {
    console.log( prop + ' : ' + obj[prop] );
  }
}


//цикл while
var k = 0
while (k < 10) {
  console.log( k++ );
};


//do while
var h = 0;

do {
  console.log( h++ );
} while (h < 1);


//function declaration
function funcDec (a, b) {
  return a + b;
}


console.log( funcDec(2,3) );

//function expression

var funcExp = function(a, b) {
  return a + b;
};

console.log( funcExp(2,3) );

// hoisting

function func1() {

  function funcExample() {
    return 'one';
  }

  var variable =  funcExample();

  function funcExample() {
    return 'two';
  }

  return variable;
};

function func2() {

  var funcExample = function () {
    return 'one';
  }

  var variable = funcExample();

  var funcExample = function () {
    return 'two';
  }

  return variable;

};

console.log(func1());
console.log(func2());

// функции обратного вызова (callback)

var func = function(callback) {
var name = "Nick";
  return callback(name);
};



console.log(func( function(n){
  return "Hello " + n;
}));


// возвращение функции
var func1 = function() {
  return function() {
    console.log( 'Привет!!!' );
  };
};

func1()();

//Immediately-Invoked Function Expression (IIFE)

var prop = 1;

;(function(pro) {

  console.log( pro );
  var prop2 = 2;
  console.log( 'Привет от анонимной самовызывающейся функции!!!' );

})(prop); // Передаем параметр

//объект arguments

var funcArgs = function(){
  var i,
      sum = 0;

  for (i = 0; i < arguments.length; i++ ) {
    sum += arguments[i];
  };

  return sum;
};

console.log(funcArgs(1,2,3, 545 , 646, 6447, 444));

// Замыкание

function (){
  var a, b, c;
  (function(item){})(a); // a будет существовать остальное нет
}

function getAdder(base){
  return function(n){
    return base + n
  }
}

// Рекурсия перебор всех значений обьект в обьекте
var obj ={
  0: 'a',
  1: 'b',
  2: {
    0: 'c',
    1: 'd'
  },
  3: 'e',
  4: 'f'
};

// var str = '';
function getValues(obj){
  for (var key in obj){ // key ключ
    if ( typeof(obj[key]) === 'object' ){
      getValues(obj[key]);
    } 
    else{
      console.log(obj[key]);
    }
  }
}
getValues(obj)


function func() {
    for(var i=0;i<arguments.length;i++) {
        alert("arguments["+i+"] = "+arguments[i])
    }
}
func('a','b',true)

// выведет
// arguments[0] = a
// arguments[1] = b
// arguments[2] = true
//глобальные переменные
var oneOne = 1;

// всегда пиши var !!!
globalll = 2444;

//пример как могут попортить жизнь, объявление переменных без var
//в данном случае i специально объявили без var
var outer = function () {
  var local = '22';
  var arr1 = [1,2,3];

  for ( i = 0; i < arr1.length; i++) {
    inner();
  }
};

var inner = function() {
  var arr2 = [4,6,8];
  for ( i = 0; i < arr2.length; i++) {
    console.log(i);
  }

};


outer();


// цепочка областей видимости

var k = 4;

console.log( k );
var outerScope = function() {
  var k = 8,
    i;

  console.log( k );

  var innerScope = function(){
    var k = 12;
    console.log( k );
  };

  innerScope();
  console.log( k );

};

outerScope();

console.log( k );



var firstFunc = function () {
  var index = 5;

  return function() {
    return index;
  };
};


var secondFunc = function() {
  var index = 15;

  console.log( firstFunc()() );
};

secondFunc();


// Глобальный объект window можно разделить на три части:

//  Объектная модель документа (DOM) — объект document,через который осуществляется доступ к содержимому страницы.
//  Объектная модель браузера (BOM) — объекты, методы и свойства для работы с браузером.
//  Сам javascript — его объекты, свойства и функции.

// А теперь пройдемся по основным объектам BOM:

//  navigator — объект в котором есть общие данные про операционную систему и браузер, а так же различные методы и свойства для работы с браузером.
//  screen — объект который содержит общие данные об экране, такие как разрешение и цветность.
//  location — объект в котором находится информация о текущем URL и в котором можно его поменять, а так же перезагружать страницу.
//  frames — объект содержащий коллекцию window-объектов дочерних фреймов.
//  history — объект, позволяющий осуществлять навигацию на предыдущую/последующую страницы по истории браузера и изменить URL без перезагрузки страницы с использованием History API.

var foo = 'String';

console.log( navigator.userAgent );                 //содержит информацию о браузере.
console.log( navigator.platform );                  //содержит информацию о ОС
console.log( screen.width + ' x ' +screen.height ); //разрешение вашего экрана
console.log( location.toString() );                 //ваш урл в виде строки
console.log( frames );                              //фреймы
console.log( history );                             //история браузера


//window.confirm('BOM');
var bar = window.prompt();

if (bar === 'Привет') {
 alert('Привет и тебе от BOM!')
} else {
 alert('Пока!');
}

var foo = 'String';

console.log(navigator.userAgent);               //содержит информацию о браузере.
console.log(navigator.platform);                //содержит информацию о ОС
console.log(screen.width + 'x' +screen.height); //разрешение вашего экрана
console.log(location.toString());               //ваш урл в виде строки
console.log(frames);                            //фреймы
console.log(history);                           //история браузера


//window.confirm('BOM');
var bar = window.prompt();

if (bar === 'Привет') {
 alert('Привет и тебе от BOM!')
} else {
 alert('Пока!');
}


(function() {

//NodeList - коллекция выбранных узлов

var elems            = document.getElementsByTagName("p"),           //взять все элементы с тегом p.
    classElems       = document.getElementsByClassName("paragraph"), //взять все элементы с классом paragraph
    idElem           = document.getElementById("four"),              //взять элемент с айдишником four
    elemSelector     = document.querySelector("p"),                  //выдаст первый p элемент
    elemsSelectorAll = document.querySelectorAll("p"),               //выдаст все p элементы на странице. getElementsByTagName работает быстрее
    elemsInDiv       = document.querySelectorAll("div p"),           //выдаст все p элементы находящиеся в теге div
    idElemSelector   = document.querySelector("#four");              //выдаст элемент с id four. getElementById работает быстрее

  console.log( elems );
  console.log( classElems );
  console.log( idElem );
  console.log( elemSelector );
  console.log( elemsSelectorAll );
  console.log( elemsInDiv );
  console.log( idElemSelector );


for (var i = 0, len = elems.length; i < len; i++) {
  console.log( elems[i].tagName );                         //имя тега
  console.log( elems[i].parentNode );                      //родительский узел
  console.log( elems[i].previousSibling.previousSibling ); //предыдущий узел
  console.log( elems[i].nextSibling.nextSibling );         //следующий узел
  console.log( elems[i].previousSibling.nodeName );        //имя узла

  console.log( elems[i].nodeType );                        //тип узла
  console.log( elems[i].previousSibling.nodeType );

  if (elems[i].nodeType === 1) {
    console.log( "Это узел элемента" );
  }

  if (elems[i].previousSibling.nodeType === 3) {
    console.log( "Это текстовый узел" );
  }

}


console.log( document.querySelector("div").childNodes ); //дочерние узлы
console.log( document.querySelector("div").children );   //дочерние элементы
console.log( document.querySelector("div").lastChild );  //последний дочерний узел
console.log( document.querySelector("div").firstChild ); // первый дочерний узел
console.log( document.querySelector("div").innerHTML );  //выдает содержимое узла в виде строки

})();



(function() {

var doc = document,                                                                 // Кеширование переменных, оптимизация кода
  elem = doc.createElement("p"),                                                    //создать узел элемента
  content = doc.createTextNode("<strong>Это динамично созданный элемент</strong>"), //создать текстовый узел
  wrappedP = doc.getElementById("wrapped");


elem.innerHTML = '<strong>Это динамично созданный элемент</strong>'; //создать html
wrappedP.parentNode.removeChild(wrappedP);                           //удалить узел
elem.appendChild(content);                                           //вставить узел в другой
elem.setAttribute('id', 'mrDynamic');                                //поставить атрибут элементу
elem.id = 'mrDynamic';

wrappedP.parentNode.appendChild(elem);
wrappedP.parentNode.insertBefore(elem, wrappedP); //вставить элемент перед другим
wrappedP.parentNode.replaceChild(elem, wrappedP); //заменить один элемент другим

})();


var arr = [1,2,3,4,5]
var arr1 = [5,171,24,5]
arr1.sort() // [171, 24, 5, 5]

// Сортирует как числа!!!

arr1.sort(function(a,b){return +a > +b})
[5, 5, 24, 171]

// Сортирует как числа!!!
arr1.sort(function(a,b){return +a<  +b})
171,24,5,5


var fruit = ["арбузы", "Вишня", "бананы"]

fruit.sort(function(a,b){return a.toLowerCase() > b.toLowerCase()})
["арбузы", "бананы", "Вишня"]

var s = [{id: 5, name: 'Vasya'},{id: 17, name: 'Petya'}]

s.sort(function(a,b){return a.name > b.name})

```
