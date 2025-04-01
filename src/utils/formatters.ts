
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-IN').format(num);
};

export const formatMonths = (months: number): string => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${remainingMonths} month${remainingMonths === 1 ? '' : 's'}`;
  } else if (remainingMonths === 0) {
    return `${years} year${years === 1 ? '' : 's'}`;
  } else {
    return `${years} year${years === 1 ? '' : 's'} and ${remainingMonths} month${remainingMonths === 1 ? '' : 's'}`;
  }
};
