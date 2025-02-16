const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//Part 1: Capitalizes first letter in the sentence
// const titleCased = () => {
//   return tutorials.map(word =>{
//     const toCapitalize = word.charAt(0).toUpperCase();
//     const restOfWord = word.slice(1);
//     return toCapitalize  + restOfWord;
//   })
// }

const titleCased = () => {
  return tutorials.map(sentence =>{
    const wordArray = sentence.split(" ")
    const capitalizedArray = wordArray.map(word => {
      const toCapitalize = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return toCapitalize  + restOfWord;
    }) 
    // console.log(capitalizedArray.join(" "))
    return capitalizedArray.join(" ")
  })
}

// titleCased();