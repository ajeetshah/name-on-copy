const nameOnCopy = require('name-on-copy').default

console.log(nameOnCopy)
console.log(
  nameOnCopy('A', ['Acopy'], {
    useSpaces: true,
  })
)
