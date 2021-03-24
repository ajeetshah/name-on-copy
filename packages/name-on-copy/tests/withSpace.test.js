const nameOnCopy = require('../index').default

test('should work with undefined', () => {
  expect(
    nameOnCopy('', [], {
      useSpaces: true,
    })
  ).toBe(' copy')
})

test('should work with blank', () => {
  expect(
    nameOnCopy('', [], {
      useSpaces: true,
    })
  ).toBe(' copy')
})

test('hello first', () => {
  expect(
    nameOnCopy('hello', ['hello'], {
      useSpaces: true,
    })
  ).toBe('hello copy')
})

test('hello second', () => {
  expect(
    nameOnCopy('hello', ['hello', 'hello copy'], {
      useSpaces: true,
    })
  ).toBe('hello copy2')
})

test('hello third', () => {
  expect(
    nameOnCopy('hello', ['hello', 'hello copy', 'hello copy2'], {
      useSpaces: true,
    })
  ).toBe('hello copy3')
})

test('hellocopy first', () => {
  expect(
    nameOnCopy('hello copy', ['hello', 'hello copy', 'hello copy2'], {
      useSpaces: true,
    })
  ).toBe('hello copy3')
})

test('hellocopy2 first', () => {
  expect(
    nameOnCopy(
      'hello copy2',
      ['hello', 'hello copy', 'hello copy2', 'hello copy3'],
      {
        useSpaces: true,
      }
    )
  ).toBe('hello copy4')
})

test('a.txt first', () => {
  expect(nameOnCopy('a.txt', ['a.txt'], { isFileName: true, useSpaces: true })).toBe(
    'a copy.txt'
  )
})

test('a.txt second', () => {
  expect(
    nameOnCopy('a.txt', ['a.txt', 'a copy.txt'], {
      isFileName: true,
      useSpaces: true,
    })
  ).toBe('a copy2.txt')
})

test('acopy.txt first', () => {
  expect(
    nameOnCopy('a copy.txt', ['a copy.txt'], { isFileName: true, useSpaces: true })
  ).toBe('a copy2.txt')
})

test('acopy.txt second', () => {
  expect(
    nameOnCopy('a copy.txt', ['a.txt', 'a copy.txt'], {
      isFileName: true,
      useSpaces: true,
    })
  ).toBe('a copy2.txt')
})

test('a.pdf first', () => {
  expect(
    nameOnCopy('a.pdf', ['a.txt', 'a.pdf', 'a copy.txt'], {
      isFileName: true,
      useSpaces: true,
    })
  ).toBe('a copy.pdf')
})

test('a.pdf second', () => {
  expect(
    nameOnCopy('a.pdf', ['a.txt', 'a.pdf', 'a copy.txt', 'a copy.pdf'], {
      isFileName: true,
      useSpaces: true,
    })
  ).toBe('a copy2.pdf')
})

test('acopy.pdf second', () => {
  expect(
    nameOnCopy(
      'a copy.pdf',
      [
        'a.txt',
        'a.pdf',
        'a copy.txt',
        'a copy.pdf',
        'a copy copy',
        'a copy copy.txt',
        'a copy copy.pdf',
      ],
      {
        isFileName: true,
        useSpaces: true,
      }
    )
  ).toBe('a copy2.pdf')
})

test('should be hellocopy11', () => {
  const data = [2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => 'hello copy' + n)
  expect(
    nameOnCopy('hello', ['hello copy', ...data], {
      useSpaces: true,
    })
  ).toBe('hello copy11')
})

test('should be hellocopy19', () => {
  const data = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
    (n) => 'hello copy' + n
  )
  expect(
    nameOnCopy('hello', ['hello copy', ...data], {
      useSpaces: true,
    })
  ).toBe('hello copy19')
})

test('should be hellocopy20', () => {
  const data = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(
    (n) => 'hello copy' + n
  )
  expect(
    nameOnCopy('hello', ['hello copy', ...data], {
      useSpaces: true,
    })
  ).toBe('hello copy20')
})

test('should be hellocopy50', () => {
  const data = []
  for (let i = 2; i < 50; i++) {
    data.push('hello copy' + i)
  }
  expect(
    nameOnCopy('hello', ['hello', 'hello copy', ...data], {
      useSpaces: true,
    })
  ).toBe('hello copy50')
})

test('should be hellocopy199', () => {
  const data = []
  for (let i = 2; i < 199; i++) {
    data.push('hello copy' + i)
  }
  expect(
    nameOnCopy('hello', ['hello', 'hello copy', ...data], {
      useSpaces: true,
    })
  ).toBe('hello copy199')
})
