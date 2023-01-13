// function ask(arr){
//     const arrlen = arr.length=0;
//     // for(i=0;i<arrlen;i++){
//     //     arr.pop()
//     // }
//     console.log(arr)
// }
// const arra = [47,43,78,23]
// ask(arra)

// function addarr(array){
//     // debugger;   
//     let addition=0;
//     array.forEach(element => {
//             addition+=element
//             console.log(addition)    
//         });
//         // for(i=0;i<=array.length;i++){
//         //      console.log(arrar[i])
//         // }
//       //  console.log(addition);
// }
// const arra = [10,20]
// addarr(arra);

// binary serach algo in javascript

// function binalgo(arr, element){
//     arr.sort();
//     while(arr.length>0 || )
// }



let recursiveFunction = function (arr, x, start, end) {
	
	// Base Condition
	if (start > end) return false;

	// Find the middle index
	let mid=Math.floor((start + end)/2);

	// Compare mid with given key x
	if (arr[mid]===x) return true;
		
	// If element at mid is greater than x,
	// search in the left half of mid
	if(arr[mid] > x)
		return recursiveFunction(arr, x, start, mid-1);
	else

		// If element at mid is smaller than x,
		// search in the right half of mid
		return recursiveFunction(arr, x, mid+1, end);
}

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length-1))
	console.log("Element found!");
else console.log("Element not found!<br>");

x = 5;

if (recursiveFunction(arr, x, 0, arr.length-1))
	console.log("Element found!<br>");
else console.log("Element not found!<br>");
									
