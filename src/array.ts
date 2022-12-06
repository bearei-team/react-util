export const isEqual = <T, _>(a: T[], b: T[]): boolean =>
  JSON.stringify([...new Set(a)].sort()) ===
  JSON.stringify([...new Set(b)].sort());
