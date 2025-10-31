
//<-------[ BUBBLE SORT ]------->

function bubbleSort(arr){
     let n = arr.length;
     for ( let i = 0; i < n-1; i++){
          let isSwapped = false;
          for (let j = 0 ; j < n-1-i; j++){
               if (arr[j] > arr[j+1]){
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                    isSwapped = true;
               }
          }

          if (!isSwapped) break;
     }
     return arr;
}
let arr = [7, 2, 4, 1]
console.log(bubbleSort(arr))


//<-------[ INSERTION SORT ]------->

function insertionSort(arr){
     let n = arr.length;

     for ( let i = 1; i < n; i++){
          let key = arr[i]
          let j = i-1;

          while ( j>=0 && arr[j] > key){
               arr[j+1]= arr[j]
               j--
          }
          arr[j+1] = key;
     }
     return arr
}
let arr2 = [7,2,4,1]
console.log(insertionSort(arr2))

//<-------[ SELECTION SORT ]------->

function selectionSort(arr){
     let n = arr.length;

     for (let i = 0 ; i < n-1; i++){
          let minIndex = i;

          for (let j = i+1; j < n; j++){

               if (arr[j] < arr[minIndex]){
                    minIndex = j
               }
          }

          if (minIndex !== i){
               [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
          }
     }
     return arr;
}
let arr3 = [2,7,4,1]

console.log(selectionSort(arr3))

//<-------[ QUICK SORT ]------->

function partition(arr,low,high){
     let pivot = arr[low]
     let i = low, j = high;

     while(i < j){
          do{
               i++
          }while( i < high && arr[i] <= pivot);

          do{
               j--
          }while( j > low && arr[j] > pivot)

          if ( i < j){
               [arr[i],arr[j]] = [arr[j],arr[i]]
          }
     }
     [arr[low],arr[j]] = [arr[j],arr[low]]
     return j;
}

function quickSort(arr,low=0,high=arr.length-1){
     if (low < high){

          let pivotIndex = partition(arr,low,high)
          quickSort(arr,low,pivotIndex)
          quickSort(arr,pivotIndex+1,high)
     }
     return arr
}
console.log(quickSort([7, 2, 4, 1, 9]));


//<-------[ MERGE SORT ]------->

function mergeSort(arr){
     if (arr.length <= 1) return arr;

     let mid = Math.floor(arr.length/2);

     let left = arr.slice(0,mid);
     let right = arr.slice(mid);

     let sortedLeft = mergeSort(left);
     let sortedRight = mergeSort(right);

     return merge(sortedLeft,sortedRight)
}

function merge(left,right){
     let i = 0,j = 0, result = [];

     while ( i < left.length && j < right.length){
          if (left[i] <= right[j]){
               result.push(left[i]);
               i++
          }else{
               result.push(right[j])
               j++
          }
     }
     while ( i < left.length) result.push(left[i++])
     while ( j < right.length) result.push(right[j++])

     return result;
}
console.log(mergeSort([7,2,4,1,9]))