const nameOnCopy = require('../index').default

test('should work with undefined', () => {
  expect(nameOnCopy()).toBe('copy')
})

test('should work with blank', () => {
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

test('hellocopy first', () => {
  expect(nameOnCopy('hellocopy', ['hello', 'hellocopy', 'hellocopy2'])).toBe(
    'hellocopy3'
  )
})

test('hellocopy2 first', () => {
  expect(
    nameOnCopy('hellocopy2', ['hello', 'hellocopy', 'hellocopy2', 'hellocopy3'])
  ).toBe('hellocopy4')
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
    'acopy2.txt'
  )
})

test('acopy.txt second', () => {
  expect(
    nameOnCopy('acopy.txt', ['acopy.txt', 'acopycopy.txt'], { isFileName: true })
  ).toBe('acopy2.txt')
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
  ).toBe('acopy2.pdf')
})

test('should be hellocopy11', () => {
  const data = [2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => 'hellocopy' + n)
  expect(nameOnCopy('hello', ['hellocopy', ...data])).toBe('hellocopy11')
})

test('should be hellocopy19', () => {
  const data = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
    (n) => 'hellocopy' + n
  )
  expect(nameOnCopy('hello', ['hellocopy', ...data])).toBe('hellocopy19')
})

test('should be hellocopy20', () => {
  const data = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(
    (n) => 'hellocopy' + n
  )
  expect(nameOnCopy('hello', ['hellocopy', ...data])).toBe('hellocopy20')
})

test('should be hellocopy50', () => {
  const data = []
  for (let i = 2; i < 50; i++) {
    data.push('hellocopy' + i)
  }
  expect(nameOnCopy('hello', ['hello', 'hellocopy', ...data])).toBe('hellocopy50')
})

test('should be hellocopy199', () => {
  const data = []
  for (let i = 2; i < 199; i++) {
    data.push('hellocopy' + i)
  }
  expect(nameOnCopy('hello', ['hello', 'hellocopy', ...data])).toBe('hellocopy199')
})
