```js
btn.addEventListener('click', function () {
  let xhr = new XMLHttpRequest();
  // 1 метод GET POST
  // 2 - куда запрос
  xhr.open("GET", "timer/text.txt");
  xhr.addEventListener("load", function () {
    // xhr.responseText - содержимое файла
    console.log("Ответ получен" , xhr.responseText);
    container.innerText = xhr.responseText;
});
  xhr.send();
});
```
```js
function sendAjax(url) {
  return new Promise(function (resolve, reject) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url); // Post или PUT если загрузаем информацию
    xhr.addEventListener("load", function () {
      resolve(xhr.responseText); // передать можно только 1 агрумент в первый then
    });
    xhr.addEventListener("error", function () {
      reject()
    });
    xhr.send(); // xhr.send(data); если загружаем информацию передаем данные

  })
}
```
```js
btn.addEventListener('click', function () {
  sendAjax("timer/text.txt").then(function (responseText) {
    container.innerText = responseText;
    return responseText; // Что бы передать в следующий then
  }).then(function (responseText) { // не нужен для примера передачи аргумента
    console.log(`Ответ ${responseText}`)
  })
});
```
```js
// JSON

function sendAjax(url) {
  return new Promise(function (resolve, reject) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url); // Post или PUT если загрузаем информацию
    xhr.responseType = 'json'; // Будет обрабатывать JSON
    xhr.addEventListener("load", function () {
      resolve(xhr.response); // для json
    });
    xhr.addEventListener("error", function () {
      reject()
    });
    xhr.send(); // xhr.send(data); если загружаем информацию передаем

  })
}
```
```js
btn.addEventListener('click', function () {
  sendAjax("timer/list.json").then(function (response) {
    // let result = JSON.parse(responseText)
    console.log(response);
    for ({name} of response){
      let div = document.createElement("div");
      div.innerText=name;
      container.appendChild(div)
    }
  })
});
```
