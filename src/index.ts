import { isUnique, generateFirst, generateNext } from './utils'

type TParenthesis = '(' | '{' | '['

interface IOptions {
  suffix?: string
  useSpaces?: boolean
  isFileName?: boolean
  parenthesis?: TParenthesis
}

const defaultOptions: IOptions = {
  suffix: 'copy',
  useSpaces: false,
  isFileName: false,
}

export default function nameOnCopy(
  source: string = '',
  names: string[] = [],
  options: IOptions = {}
) {
  const { suffix, useSpaces, isFileName } = Object.assign(defaultOptions, options)
  let name = generateFirst(source, suffix, useSpaces, isFileName)
  while (!isUnique(name, names)) {
    name = generateNext(name, isFileName)
  }
  return name
}
