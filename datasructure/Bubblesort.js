// arr = [2, 3, 4, 1, 5];
// sortedArr = [];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     sortedArr.push(arr[i]);
// }

//  console.log(sortedArr);

const bubbleSort =(arr)=>{
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};
let myArray = [12, 10, 3, 7, 4];
console.log(bubbleSort(myArray));
