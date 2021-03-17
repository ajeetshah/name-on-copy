// TODO write test for these
export function isNumber(value: string) {
  return !isNaN(+value)
}

export function isUnique(value: string, values: string[]) {
  return values.indexOf(value) === -1
}

export function getFileNameAndExtension(value: string) {
  const index = value.lastIndexOf('.')
  if (index > -1) {
    return {
      fileName: value.slice(0, index),
      extension: value.slice(index),
    }
  }
  return {
    fileName: value,
    extension: '',
  }
}

export function increment(value: string) {
  const matched = value.match(/\d+$/)
  if (matched) {
    const nextNumber = Number(matched[0]) + 1
    return value.slice(0, matched.index) + nextNumber
  }
  return value + 2
}

export function generateFirst(
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

export function generateNext(name: string, isFileName: boolean) {
  if (!isFileName) {
    return increment(name)
  }
  const { fileName, extension } = getFileNameAndExtension(name)
  return increment(fileName) + extension
}
