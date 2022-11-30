import { describe, expect, it } from 'vitest'
import { canReconfigure } from '../src/reconfigure.js'

describe('canReconfigure', () => {
  //   it('debe ser una funcion', () => {
  //     expect(canReconfigure).toBeTypeOf('function')
  //   })

  it('debe lanzar un error si el primer parametro es vacio', () => {
    expect(() => canReconfigure()).toThrow()
  })

  it('debe lanzar un error si el parametro no es un string', () => {
    expect(() => canReconfigure(2)).toThrow()
  })

  it('debe lanzar un error si el segundo parametro no es un string', () => {
    expect(() => canReconfigure('a')).toThrow()
  })

  it('debe retornar un boolean si recibe ambos parametros', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('debe retornar false si string recibidos tienen diferentes tamaños', () => {
    expect(canReconfigure('abc', 'de')).toBe(false)
  })

  it('debe retornar false si string tiene diferentes tamaños y las mismas letras ', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })

  it('debe retornar false si el string recibido tiene diferente cantidad de letras unicas', () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false)
  })

  it('debe retornar false si el string tiene diferente orden de transformacion', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
