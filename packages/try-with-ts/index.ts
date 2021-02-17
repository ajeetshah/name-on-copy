import nameOnCopy from 'name-on-copy'
// const nameOnCopy = require("name-on-copy").default;

console.log(nameOnCopy)
console.log(
  nameOnCopy('a', ['a copy'], {
    // suffix: "woo",
    useSpaces: true,
  })
)
