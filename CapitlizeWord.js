// Capitlize Each Letter of the Word
// like  'hello world' to 'Hello World'

const capitlizeSentence = (str) => str.toLowerCase().split(' ').map((item)=> item[0].toUpperCase()+ item.slice(1)).join(' ')
console.log(capitlizeSentence('hello world'))
console.log(capitlizeSentence('anupam IS my nAME'))