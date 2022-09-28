export const round = (value: number, charsAfter: number): number =>
  Math.round(value * Math.pow(10, charsAfter)) / Math.pow(10, charsAfter);
