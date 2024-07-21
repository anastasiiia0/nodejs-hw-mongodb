const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const isValidType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isValidType(type)) return type;
};

const parseBoolean = (isFavourite) => {
  const isString = typeof isFavourite === 'string';
  if (!isString) return;

  const lowerCased = isFavourite.toLowerCase().trim();
  if (lowerCased === 'false' || lowerCased === '0') return false;
  if (lowerCased === 'true' || lowerCased === '1') return true;

  return undefined;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseType(type);
  const parsedIsFavourite = parseBoolean(isFavourite);

  return { type: parsedType, isFavourite: parsedIsFavourite };
};
