
//<-------[ BINARY SEARCH - ( ITERATIVE ) ]------>

function binarySearch(arr,target){
     let left = 0,right = arr.length-1;

     while ( left <= right){
          let mid = Math.floor((left+right)/2);

          if (arr[mid] === target){
               return mid;
          }else if (target > arr[mid]){
               left = mid+1
          }else{
               right = mid-1
          }
     }
     return -1;
}
let arr = [5, 8, 12, 23, 35, 45, 62];

console.log(binarySearch(arr,23))


//<-------[ BINARY SEARCH - ( RECURSIVE ) ]------>

function binarySearchRecursive(arr,target,left = 0,right = arr.length-1){

     if (left > right) return -1;

     let mid = Math.floor((left+right)/2);

     if (arr[mid] === target){
          return mid;
     }

     if (target > arr[mid]){
          return binarySearchRecursive(arr,target,mid+1,right)
     }

     return binarySearchRecursive(arr,target,left,mid-1)
}

let arr2 = [5, 8, 12, 23, 35, 45, 62];
console.log(binarySearchRecursive(arr2, 23));
