const lang = require('./../../lang/en_GB.json');
export const localise = (key: string) => {
  return lang[key];
};