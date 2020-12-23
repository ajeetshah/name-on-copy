function isNumber(value) {
  return !isNaN(+value)
}

function isUnique(name, names) {
  return names.indexOf(name) === -1
}

function increment(name) {
  const lastChar = name.slice(-1)
  if (isNumber(lastChar)) {
    const nameWithoutLastIndex = name.slice(0, name.length - 1)
    return nameWithoutLastIndex + (+lastChar + 1)
  }
  return name + 2
}

export default function nameOnCopy(
  source = '',
  names = [],
  options = { suffix: 'copy', useSpaces: false }
) {
  let name = source + (options.useSpaces ? ' ' : '') + options.suffix
  while (!isUnique(name, names)) {
    name = increment(name)
  }
  return name
}
