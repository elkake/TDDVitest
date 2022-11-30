export function canReconfigure (from, to) {
  //   if (from === undefined) throw new Error('from is required')
  if (typeof from !== 'string') throw new Error('Debe ser un string')
  if (typeof to !== 'string') throw new Error('Debe ser un string')

  const isSameLength = from.length === to.length

  if (!isSameLength) return false

  // set cuenta la cantidad de letras diferentes en un string
  // size el numero de elementos
  const hasSameUniqueLetters = new Set(from).size === new Set(to).size

  if (!hasSameUniqueLetters) return false

  const transformaciones = {}

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformaciones[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false

    transformaciones[fromLetter] = toLetter
  }

  return true
}
