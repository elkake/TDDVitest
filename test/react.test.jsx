import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  Calculator,
  equalSign,
  numbers,
  operations
} from '../src/Calculator.jsx'

describe('Calculator', () => {
  // limpia la pantalla despues de cada test
  afterEach(cleanup)

  it('deberia renderizar', () => {
    render(<Calculator />)
  })

  it('deberia renderiszar el titulo correctamente', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })

  it('deberia render numeros', () => {
    render(<Calculator />)

    numbers.forEach(number => {
      screen.getByText(number)
    })
  })

  it('deberia renderizar 4 filas ', () => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(4)
  })

  it('deberia renderizar las operaciones', () => {
    render(<Calculator />)

    operations.forEach(operation => {
      screen.getByText(operation)
    })
  })

  it('deberia renderizar el signo igual', () => {
    render(<Calculator />)

    screen.getByText('=')
  })

  it('deberia render un input', () => {
    render(<Calculator />)

    screen.getByRole('textbox')
  })

  it('deberia mostrarse el numero enel input cunado el user clickea', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })

  it('deberia mostrarse el numero enel input cunado el user clickea diferentes numeros', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const three = screen.getByText('3')
    fireEvent.click(three)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })

  it('deberia  mostrar numeros y operaciones', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+1')
  })

  it('deberia calcular el input recivido', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    fireEvent.click(one)

    const equal = screen.getByText(equalSign)
    fireEvent.click(equal)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2')
  })
})
