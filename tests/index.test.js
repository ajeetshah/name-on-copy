const nameOnCopy = require('../index').default

test('undefined', () => {
  expect(nameOnCopy()).toBe('copy')
})

test('blank', () => {
  expect(nameOnCopy('', [])).toBe('copy')
})

test('hello first', () => {
  expect(nameOnCopy('hello', ['hello'])).toBe('hellocopy')
})

test('hello second', () => {
  expect(nameOnCopy('hello', ['hello', 'hellocopy'])).toBe('hellocopy2')
})

test('hello third', () => {
  expect(nameOnCopy('hello', ['hello', 'hellocopy', 'hellocopy2'])).toBe(
    'hellocopy3'
  )
})

// TODO: change the algo
test('hellocopy first', () => {
  expect(nameOnCopy('hellocopy', ['hello', 'hellocopy', 'hellocopy2'])).toBe(
    'hellocopycopy'
  )
})

// TODO: change the algo
test('hellocopy2 first', () => {
  expect(
    nameOnCopy('hellocopy2', ['hello', 'hellocopy', 'hellocopy2', 'hellocopy3'])
  ).toBe('hellocopy2copy')
})
