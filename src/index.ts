function isNumber(value: string) {
  return !isNaN(+value)
}

function isUnique(name: string, names: string[]) {
  return names.indexOf(name) === -1
}

function getFileNameAndExtension(name: string) {
  const index = name.lastIndexOf('.')
  if (index > -1) {
    return {
      fileName: name.slice(0, index),
      extension: name.slice(index),
    }
  }
  return {
    fileName: name,
    extension: '',
  }
}

function increment(name: string) {
  const lastChar = name.slice(-1)
  if (isNumber(lastChar)) {
    const nameWithoutLastIndex = name.slice(0, name.length - 1)
    return nameWithoutLastIndex + (+lastChar + 1)
  }
  return name + 2
}

function generateNext(name: string, isFileName: boolean) {
  if (!isFileName) {
    return increment(name)
  }
  const { fileName, extension } = getFileNameAndExtension(name)
  return increment(fileName) + extension
}

function generateFirst(
  source: string,
  suffix: string,
  useSpaces: boolean,
  isFileName: boolean
) {
  const space = useSpaces ? ' ' : ''
  if (!isFileName) {
    return source + space + suffix
  }
  const { fileName, extension } = getFileNameAndExtension(source)
  return fileName + space + suffix + extension
}

interface IOptions {
  suffix?: string
  useSpaces?: boolean
  isFileName?: boolean
}

export default function nameOnCopy(
  source: string = '',
  names: string[] = [],
  options: IOptions = {}
) {
  const { suffix = 'copy', useSpaces = false, isFileName = false } = options
  let name = generateFirst(source, suffix, useSpaces, isFileName)
  while (!isUnique(name, names)) {
    name = generateNext(name, isFileName)
  }
  return name
}
