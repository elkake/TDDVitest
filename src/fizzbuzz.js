export const fizzbuzz = number => {
  if (typeof number !== 'number') {
    throw new Error('parametro recibido tiene que ser un numero')
  }
  if (Number.isNaN(number)) {
    throw new Error('parametro recibido tiene que ser un numero')
  }

  const multiplos = { 3: 'fizz', 5: 'buzz' }
  let salida = ''

  // object entries convierte un objeto a un arreglo de arreglos [[],[]]
  Object.entries(multiplos).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) salida += word
  })

  return salida === '' ? number : salida
}
