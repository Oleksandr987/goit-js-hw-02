/* eslint-disable linebreak-style */
function logItems(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    res.push(`${i + 1}-${arr[i]}`);
  }
  return res;
}
console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
