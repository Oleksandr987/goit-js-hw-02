/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
function checkForSpam(str) {
  const wordsLowerCase = str.toLowerCase();
  if (wordsLowerCase.includes('sale') || wordsLowerCase.includes('spam')) {
    return true;
  }
  return false;
}
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
