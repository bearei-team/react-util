function omit<T extends Record<string, unknown>, K extends keyof T>(
  target: T,
  fields: K[],
) {
  const nextTarget = {...target};

  fields?.forEach(key => {
    delete nextTarget[key];
  });

  return nextTarget;
}

export default omit;
