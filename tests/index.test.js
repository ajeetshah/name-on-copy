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

test('a.txt first', () => {
  expect(nameOnCopy('a.txt', ['a.txt'], { isFileName: true })).toBe('acopy.txt')
})

test('a.txt second', () => {
  expect(nameOnCopy('a.txt', ['a.txt', 'acopy.txt'], { isFileName: true })).toBe(
    'acopy2.txt'
  )
})

test('acopy.txt first', () => {
  expect(nameOnCopy('acopy.txt', ['acopy.txt'], { isFileName: true })).toBe(
    'acopycopy.txt'
  )
})

test('acopy.txt second', () => {
  expect(
    nameOnCopy('acopy.txt', ['acopy.txt', 'acopycopy.txt'], { isFileName: true })
  ).toBe('acopycopy2.txt')
})

test('a.pdf first', () => {
  expect(
    nameOnCopy('a.pdf', ['a.txt', 'a.pdf', 'acopy.txt'], { isFileName: true })
  ).toBe('acopy.pdf')
})

test('a.pdf second', () => {
  expect(
    nameOnCopy('a.pdf', ['a.txt', 'a.pdf', 'acopy.txt', 'acopy.pdf'], {
      isFileName: true,
    })
  ).toBe('acopy2.pdf')
})

test('acopy.pdf second', () => {
  expect(
    nameOnCopy(
      'acopy.pdf',
      [
        'a.txt',
        'a.pdf',
        'acopy.txt',
        'acopy.pdf',
        'acopycopy',
        'acopycopy.txt',
        'acopycopy.pdf',
      ],
      {
        isFileName: true,
      }
    )
  ).toBe('acopycopy2.pdf')
})
