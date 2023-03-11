function stringToArrayNumbers(string){
    return string.split(",").map((number) => parseInt(number, 10));
}

function sumArray(array) {
  return array.reduce((acc, val) => acc + val, 0);
}

function canTransport([head, ...tail], busSize) {
  let sum = head;
  for (let i = 0; i < tail.length; i++) {
    sum += tail[i];
    if (sum > busSize) {
      // The current group cannot be transported without changing its relative position
      return false;
    } else if (sum === busSize) {
      sum = 0;
    }
  }
  return true;
}

function getBusSizes(groups) {
  groups = stringToArrayNumbers(groups);
  const totalPeople = sumArray(groups);
  const sizes = [];

  for (let i = 1; i <= totalPeople; i++) {
    // If divisor of totalPeople is a valid option of x
    if (totalPeople % i === 0) {
      if (canTransport(groups, i)) {
        sizes.push(i);
      }
    }
  }
  // Array numbers to string
  return sizes.join(",");
}

module.exports = {getBusSizes};