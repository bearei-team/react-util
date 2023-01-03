export const isEqual = <T>(a: T[], b: T[]): boolean =>
  JSON.stringify([...new Set(a)].sort()) ===
  JSON.stringify([...new Set(b)].sort());
