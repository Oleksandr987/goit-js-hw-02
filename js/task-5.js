/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
function checkForSpam(str) {
  const wordsLowerCase = str.toLowerCase();
//   for (let i = 0; i < wordsLowerCase.length; i += 1) {
    if (wordsLowerCase.includes('sale') || wordsLowerCase.includes('spam')) {
      return true;
  } else {
    return falce;
  }
}
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
