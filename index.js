function relativeSort(arr1, arr2) {
  let resArr = [];
  let finalArr = [];
  let temp = [];
  let leftArr = []

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        resArr.push(arr1[i]);
        break;
      } else {
        resArr.push(arr1[i]);
        break;
      }
    }
  }


  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < resArr.length; j++) {
      if (resArr[j] == arr2[i]) {
        finalArr.push(resArr[j]);
      }
    }
  }

  for (let i = 0; i < resArr.length; i++) {
    if (finalArr.includes(resArr[i])) {
      temp.push(resArr[i]);
    }else{
        leftArr.push(resArr[i])
    }
  }

  leftArr.sort((a,b)=>{
    return a-b;
  })

  console.log('Final', finalArr.concat(leftArr));

}


relativeSort([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
relativeSort( [28,6,22,8,44,17],[22,28,8,6])

