function sumOfMultiples(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 == 0 || arr[i] % 5 == 0) {
        sum += arr[i]
      }
    }
    console.log(sum)
  }
  sumOfMultiples([6, 3, 0, 30, 7])
  //39
sumOfMultiples([9, 3, 21, 30, 7,8,4,2])
//63
sumOfMultiples([10, 20, 11, 17, 7])
//30
  module.exports = sumOfMultiples
