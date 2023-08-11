export const generateInitials = (text: string) => {
  const initials = text.match(/[A-Z]/g);
  return initials ? initials.join('') : text[0];
};
