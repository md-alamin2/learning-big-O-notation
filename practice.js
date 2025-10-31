// const startTime = performance.now();

// for (let i = 0; i<=500; i++){
//     console.log(i)
// }

// const endTime = performance.now();
// console.log(`Execution time: ${endTime - startTime} milliseconds`);

// console.time('task')

// for (let i = 0; i<=500; i++){
//     console.log(i)
// }

// console.timeEnd('task')

const firstArray =[];
const secondArray =[];

for (let i = 0; i < 600000; i++){
    if(i < 300000){
        firstArray.push(i);
    }

    secondArray.push(i);
}

console.log(firstArray.length)
console.log(secondArray.length)

console.time('arrayTask')

const firstUserList = firstArray.map(number => {userId: number});

console.timeEnd('arrayTask')

console.time('arrayTask2')

const secondUserList = secondArray.map(number => {userId: number});

console.timeEnd('arrayTask2')