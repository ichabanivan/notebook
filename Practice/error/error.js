function div(a, b) {
  if (b==0) {
    throw new Error("На ноль делить нельзя!")
  }
  return a/b;
}
try {
  let res = div(10, 0);
  console.log(res)
} catch(e) { // Выполняется если есть ошибка
  console.error(e.message);
} finally { // Выполняется в любом случае
  console.log("End");
}
