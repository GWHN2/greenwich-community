String.prototype.capitalize = function () {
  const str = String(this);

  if (!str) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
String.prototype.shorten = function (length?: number) {
  const address = String(this);
  if (!address) {
    return "";
  }
  const maxLength = length || 20;
  if (address.length > maxLength) {
    return (
      address.substring(0, maxLength / 2) +
      "..." +
      address.substring(address.length - maxLength / 2)
    );
  } else {
    return address;
  }
};

export {};
