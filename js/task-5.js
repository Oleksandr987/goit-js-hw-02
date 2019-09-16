/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
const trueWords = ['SPAM', 'spam', 'Spam', 'SALE', 'sale', 'Sale'];
function checkForSpam(str) {
  for (let i = 0; i < trueWords.length; i += 1) {
    if (str.includes(trueWords[i])) {
      return true;
    }
  }
  return false;
}
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
