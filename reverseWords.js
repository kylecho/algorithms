const reverseWords = (str) => {
  const words = str.trim().replace(/\s+/g, ' ').split(' ')
  return words.reverse().join(' ')
}

console.log(reverseWords('the sky is blue'))
