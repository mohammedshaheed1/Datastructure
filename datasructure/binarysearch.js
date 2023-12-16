function binarySearch(arr,value){
  let left=0;
  let right=arr.length-1;
 
while(left<=right){
let mid = Math.floor((left + right) / 2);
  if (arr[mid] ===value) {
      return mid;
    }
   if (arr[mid] < value) {
      left = mid + 1;
    }
else {
      right = mid - 1;
    }
  } return -1;
}
   const sortedArray=[2,4,6,8,10,12];
   let targetValue=2
   const result = binarySearch(sortedArray, targetValue);

 if (result !== -1) {
    console.log(`Element ${targetValue} found at index ${result}`);
  } else
    {
  console.log(`Element ${targetValue} not found in the array`);
}

