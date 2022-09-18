
function sumOfTwoSmallestNums(arr) {
    const newArr = arr.sort((a, b) => a - b)
    console.log(newArr[0] + newArr[1])
  }
  
  sumOfTwoSmallestNums( [19, 5, 42, 2, 77])
  //7
  sumOfTwoSmallestNums([10, 343445353, 3453445, 3453545353453])
  //3453455


module.exports = sumOfTwoSmallestNums
