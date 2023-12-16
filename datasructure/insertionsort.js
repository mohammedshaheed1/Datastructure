 selectionSort=(arr)=> { 

	let n = arr.length; 
	let key; 
	let i, j; 

	for (i = 0; i < n ; ++i) { 
		key = arr[i]; 
		j = i - 1; 

		for (j; j >= 0, arr[j]>key; --j){ 
			arr[j+1]=arr[j]; 
		} 
		arr[j+1]=key; 
	} 
} 
const arr = [64, 25, 12, 22, 11]; 
console.log("Original array: " + arr); 

selectionSort(arr); 
console.log("After sorting: " + arr);
