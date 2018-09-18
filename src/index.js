module.exports = function getZerosCount(number) {
  let result = 0;
  let counter = 1;
  
  while(number/Math.pow(5, counter) > 0) {
    result += Math.floor(number/Math.pow(5, counter));
    counter++;
  }
  
  return result;
}
