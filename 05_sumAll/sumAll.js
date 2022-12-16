const sumAll = function(min, max) {

  if (min < 0 || max < 0) return "ERROR";
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  let sum = 0;
  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }
  for (i = min; min <= max; i++) {
    sum += min; 
  }
  return sum;
};

console.log(sumAll(0, 5));

// Do not edit below this line
module.exports = sumAll;