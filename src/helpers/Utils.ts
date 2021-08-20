export const generateRandomNumber = (dimension: number): number =>
  Math.floor(Math.random() * 1000 + 1) % dimension

export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
