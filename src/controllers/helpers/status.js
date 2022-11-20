exports.IsEqual = function (Type, value) {
  let isValid = true;

  if (Type === value) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
};
