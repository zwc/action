import { describe, it, expect } from 'bun:test'
import { power } from './index'

describe("greet returns expected value", () => {
  it('should return 1 when exponent is 0', () => {
    expect(power(2, 0)).toBe(1)
  })
})