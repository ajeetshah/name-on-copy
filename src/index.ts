function isNumber(value: string) {
  return !isNaN(+value)
}

function isUnique(name: string, names: string[]) {
  return names.indexOf(name) === -1
}

function increment(name: string) {
  const lastChar = name.slice(-1)
  if (isNumber(lastChar)) {
    const nameWithoutLastIndex = name.slice(0, name.length - 1)
    return nameWithoutLastIndex + (+lastChar + 1)
  }
  return name + 2
}

interface IOptions {
  suffix?: string
  useSpaces?: boolean
}

export default function nameOnCopy(
  source: string = '',
  names: string[] = [],
  options: IOptions = {}
) {
  const { suffix = 'copy', useSpaces = false } = options
  let name = source + (useSpaces ? ' ' : '') + suffix
  while (!isUnique(name, names)) {
    name = increment(name)
  }
  return name
}
