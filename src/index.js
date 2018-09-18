module.exports = function getZerosCount(number) {
  // your implementation
  var rem = number;
  var sum = 0;
  while(rem = Math.floor(rem / 5)){
    sum = sum + rem;
  }
  return sum;
}
