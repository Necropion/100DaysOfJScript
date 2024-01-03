//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (dateInput) => {

  //We have to use 1e12 here and not 1e9 because getTime is using milliseconds
  return new Date(dateInput.getTime() + 1e12);
};
