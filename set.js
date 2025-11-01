// const set = new Set();

// set.add('apple');
// set.add('banana');
// set.add('orange');

// console.log(set)

// const alamin = {userName: 'alamin'}
// const alo = {userName: 'alo'}
// const habib = {userName: 'habib'}

// const set = new Set();

// set.add(alamin);
// set.add(alo);
// set.add(habib);
// set.add(alamin);

// console.log(set)

const arr = ["apple", "banana", "orange", "apple"];

// const set = new Set(arr);

// set.add("tomato")

// set.forEach(item=>console.log(item))

// if we want to use array method then we have to convert set to array

// const test = Array.from(set);

// test.push('tomato');

// bootForce

const removeDupArr = (arr) => {
  const newArr = [];
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
    return newArr;
};

// set implementation {it saves time and space both}

const removeDupSet = (arr) => { 
    const set = new Set(arr);
    
    return Array.from(set);
};


console.log(removeDupArr(arr))
console.log(removeDupSet(arr));
