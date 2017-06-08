/**
 * Now you are given a string S, which represents a software license key
 * which we would like to format. The string S is composed of alphanumerical
 * characters and dashes. The dashes split the alphanumerical characters within
 * the string into groups. (i.e. if there are M dashes, the string is split
 * into M+1 groups). The dashes in the given string are possibly misplaced.
 *
 * We want each group of characters to be of length K (except for possibly
 * the first group, which could be shorter, but still must contain at least
 * one character). To satisfy this requirement, we will reinsert dashes.
 * Additionally, all the lower case letters in the string must be converted
 * to upper case.
 *
 * You are given a non-empty string S, representing a license key to format,
 * and an integer K. And you need to return the license key formatted according
 * to the description.
 */

const licenseKeyFormatting = (S, K) => {
  let c = 0
  let charsCount = 0
  let res = ''

  for (let i = S.length - 1; i >= 0; i--) {
    let char = S[i]
    if (char === '-') {
      continue
    }
    if (typeof char === 'string') {
      res = char.toUpperCase() + res
      charsCount++
    }
    if (typeof char === 'number') {
      res = char + res
      charsCount++
    }
    if (charsCount % K === 0) {
      if (S[i - 2] && S[i - 2] !== '-' && S[i - 1] === '-' ||
          S[i - 1] && S[i - 1] !== '-') {
        res = '-' + res
      }
    }
  }

  return res
}

console.log(licenseKeyFormatting('2-4A0r7-4k', 4)) // => '24A0-R74K'
console.log(licenseKeyFormatting('2-4A0r7-4k', 3)) // => '24-A0R-74K'
