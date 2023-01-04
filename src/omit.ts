const omit = <T extends Record<string, unknown>, K extends keyof T>(
  target: T,
  keys: K[],
) => {
  const nextTarget = { ...target };

  keys?.forEach(key => {
    delete nextTarget[key];
  });

  return nextTarget as Omit<T, K>;
};

export default omit;
