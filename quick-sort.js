function quickSort(array) {
    //check edge if length is 1 or less just return the array
    if(array.length <= 1){
      return array;
    }
    
    //pick a random value to use as the pivot
    const pivotVal = array.splice([Math.floor(Math.random()*array.length)],1)[0];
    //filter the arrry to get values less than or equal to the pivot
    const lowerBound = array.filter( elm => elm <= pivotVal);
    //filter the array to get values greater than the pivot
    const upperBound = array.filter( elm => elm > pivotVal);
  
    //rebuild the array after recursive sorting
    return [...quickSort(lowerBound) ,pivotVal ,...quickSort(upperBound)];
  }
  