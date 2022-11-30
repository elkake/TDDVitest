import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz.js'
// fizzbuzz es una funcion que al pasarle un numero, muestra fizz si es multiplo de 3, buzz si es de 5 y fizzbuzz si es de 3 y 5, muestra el numero si no es multiplo de nunguno

describe('fizzbuzz', () => {
  // este test ya esta cubierto en el algoritmo y no tiene sentido

  //   it('tiene que ser una funcion', () => {
  //     expect(typeof fizzbuzz).toBe('function')
  //   })

  it('deberia petar si no recibe un numero en el parametro ', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('deberia petar con un especifico error message si no recibe un numero en el parametro', () => {
    expect(() => fizzbuzz()).toThrow(
      'parametro recibido tiene que ser un numero'
    )
  })

  it('deberia petar con un especifico error message si no recibe un parametro de tipo numero', () => {
    expect(() => fizzbuzz(NaN)).toThrow(
      'parametro recibido tiene que ser un numero'
    )
  })
  it('deberia retornar 1 di el numero recibido es 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
  // it=esto , expect=suponemos/esperado , tobe = debe ser , throw=lanzar
  it('deberia retornar 2 di el numero recibido es 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  // este test se apago porque es redundante

  //   it("deberia devolver 'fizz' si el numero recibido es 3", () => {
  //     expect(fizzbuzz(3)).toBe('fizz')
  //   })

  it("deberia devolver 'fizz' si el numero recibido es multiplo de 3", () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  //   it("deberia devolver 'buzz' si el numero recibido es 5", () => {
  //     expect(fizzbuzz(5)).toBe('buzz')
  //   })

  it("deberia devolver 'buzz' si el numero recibido es multiplo de 5", () => {
    expect(fizzbuzz(20)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(25)).toBe('buzz')
  })

  it("deberia devolver 'fizzbuzz ' si el numero es multiplo de 3 y 5", () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
    expect(fizzbuzz(45)).toBe('fizzbuzz')
  })
})
