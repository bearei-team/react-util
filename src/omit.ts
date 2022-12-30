const omit = <T extends Record<string, unknown>, K extends keyof T>(
  target: T,
  fields: K[],
) => {
  const nextTarget = { ...target };

  fields?.forEach(key => {
    delete nextTarget[key];
  });

  return nextTarget as Omit<T, K>;
};

export default omit;
