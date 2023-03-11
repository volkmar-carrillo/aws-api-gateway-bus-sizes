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
      return false; // el grupo actual no puede ser transportado en este autobús sin cambiar su posición relativa
    } else if (sum === busSize) {
      sum = 0;
    }
  }
  return true;
}

function getBusSizes(groups) {
  groups = stringToArrayNumbers(groups);
  const totalPeople = sumArray(groups); // total de personas en todos los grupos
  const sizes = [];

  for (let i = 1; i <= totalPeople; i++) {
    if (totalPeople % i === 0) { // si es divisor de totalPeople, es una opción válida para x
      if (canTransport(groups, i)) {
        sizes.push(i);
      }
    }
  }

  return sizes.join(",");
}

module.exports = {
  stringToArrayNumbers,
  getBusSizes,
};