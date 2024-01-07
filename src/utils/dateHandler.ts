export const createEpoch = (isoDateString: string) => {
  return Date.parse(isoDateString);
};

export const formatIsoString = (isoDateString: string) => {
  const date = new Date(isoDateString);
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}