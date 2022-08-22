export const capitalizeFirstLetter = (str: string) => {
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
export const shortenAddress = (address: string, length?: number) => {
  if (!address) {
    return '';
  }
  const maxLength = length || 20;
  if (address.length > maxLength) {
    return (
      address.substring(0, maxLength / 2) +
      '...' +
      address.substring(address.length - maxLength / 2)
    );
  } else {
    return address;
  }
};

export const getHostname = (url: string) => {
  if (!url) {
    return '';
  }

  const hostname = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  return hostname;
};
