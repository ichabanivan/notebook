function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true
  }

  let arr1 = Object.keys(obj1); // prop1,prop2,prop3,prop4,prop5,prop6
  let arr2 = Object.keys(obj2); // prop1,prop2,prop3,prop4,prop5,prop6

  if (arr1.length == arr2.length){ // If length arr1 === length arr2
    for (let i of arr1) {
      if (typeof(obj1[i]) === typeof(obj2[i])){
        if(!!(typeof(obj1[i]) === "object")){
          if (Array.isArray(obj1[i])) { // If it is Array
            if(!(obj1[i].toString() === obj2[i].toString())){
              return false
            }
          }
          if(!(deepEqual(obj1[i], obj2[i]))){ // If it is Object
            return false
          }
          if(obj1[i] instanceof Date){ // If it is Date
            if (!(obj1[i].valueOf() === obj2[i].valueOf())) {
              return false
            }
          }
        }
        else if(!(obj1[i] === obj2[i])){
          return false
        }
      } else {
        return false
      }
    }
    return true
  } else { // If length arr1 != length arr2
    return false
  }
}

var objA = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: ['value3', 'value3'],
  prop4: {
    subProp1: 'sub value1',
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
    }
  },
  prop5: 1000,
  prop6: new Date(2016, 5, 10)
};

var objB = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: ['value3', 'value3'],
  prop4: {
    subProp1: 'sub value1',
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
    }
  },
  prop5: 1000,
  prop6: new Date(2016, 5, 10)
};

console.log(deepEqual(objA, objB));