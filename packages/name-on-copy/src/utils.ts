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

export function increment(value: string, useSpaces: boolean) {
  const space = useSpaces ? ' ' : ''
  const matched = value.match(/\d+$/)
  if (matched) {
    const nextNumber = Number(matched[0]) + 1
    return value.slice(0, matched.index).trim() + space + nextNumber
  }
  return value.trim() + space + 2
}

export function generateFirst(
  source: string,
  suffix: string,
  useSpaces: boolean,
  isFileName: boolean
) {
  const space = useSpaces ? ' ' : ''
  let name = ''
  let extension = ''
  if (isFileName) {
    const res = getFileNameAndExtension(source)
    name = res.fileName
    extension = res.extension
  } else {
    name = source
  }

  const pattern = new RegExp(`${space}${suffix}(${space}\\d*)\?\$`)
  const matched = name.match(pattern)
  if (matched) {
    let number = 2
    if (matched[1]) {
      number = Number(matched[1]) + 1
    }
    return (
      name.slice(0, name.indexOf(matched[0])).trim() +
      space +
      suffix +
      space +
      number +
      extension
    )
  }
  return name.trim() + space + suffix + extension
}

export function generateNext(name: string, useSpaces: boolean, isFileName: boolean) {
  if (!isFileName) {
    return increment(name, useSpaces)
  }
  const { fileName, extension } = getFileNameAndExtension(name)
  return increment(fileName, useSpaces) + extension
}
