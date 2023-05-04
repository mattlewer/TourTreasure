export const validateText = (name: string): boolean => {
  const noSymbols = name.replace(/[A-Za-z|-|']/g, '').length === 0;
  const nameNoSymbolsNoNumbers = name.replace(/[^A-Za-z]/g, '');
  const nameNoSpace = name.replace(/\s+/g, '');
  if (
    nameNoSpace.length > 0 &&
    nameNoSymbolsNoNumbers.length > 0 &&
    noSymbols &&
    name.length < 20
  ) {
    return true;
  }
  return false;
};
