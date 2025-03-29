function myEach(collection, callback) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    callback(values[i]);
  }
  return collection; // Return the original collection as required by the test
}

function myMap(collection, callback) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(callback(values[i]));
  }
  return result; // Return a new array with transformed values
}

function myReduce(collection, callback, acc) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  let accumulator = acc !== undefined ? acc : values[0];
  const startIndex = acc !== undefined ? 0 : 1;

  for (let i = startIndex; i < values.length; i++) {
    accumulator = callback(accumulator, values[i], collection);
  }
  return accumulator; // Return the reduced value
}

function myFind(collection, predicate) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
      return values[i]; // Return the first value that satisfies the predicate
    }
  }
  return undefined; // Return undefined if no value satisfies the predicate
}

function myFilter(collection, predicate) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
      result.push(values[i]);
    }
  }
  return result; // Return a new array with filtered values
}

function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  // Return the size of the collection (length for arrays, number of keys for objects)
}

function myFirst(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
  // Return the first element or the first `n` elements of the array
}

function myLast(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(-n);
  // Return the last element or the last `n` elements of the array
}

function myKeys(object) {
  return Object.keys(object);
  // Return an array of the object's own enumerable property names
}

function myValues(object) {
  return Object.values(object);
  // Return an array of the object's own enumerable property values
}