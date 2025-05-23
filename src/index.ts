export const power = (base: number, exponent: number): number => {
    if (exponent === 0) {
        return 1
    } else if (exponent < 0) {
        return 1 / power(base, -exponent)
    } else {
        return base * power(base, exponent - 1)
    }
}