const merge = (leftArr, rightArr) => {
  let mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const left = leftArr[leftIndex];
    const right = rightArr[rightIndex];
    //ensurse that we add the lowest possible value to the array first
    if (left < right) {
      mergedArr.push(left);
      leftIndex++;
    } else {
      mergedArr.push(right);
      rightIndex++;
    }
  }
  return mergedArr.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
};

const mergeSort = (array) => {
  //edge to make sure we never make an array smaller than 1
  if (array.length <= 1) {
    return array;
  }
  //find the halfway point of the given array
  const halfArray = Math.floor(array.length / 2);
  //split the array into to halves using slice
  const firstHalf = array.slice(0, halfArray);
  const secondHalf = array.slice(halfArray, array.length);

  //recursively call  merge sort, and merge the results for the return
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

