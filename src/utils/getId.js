export const getId = (formatedNumber, pkmIndex) => {
  if (formatedNumber < 10) formatedNumber = `#00${formatedNumber}`;
  else if (formatedNumber < 100) formatedNumber = `#0${formatedNumber}`;
  else formatedNumber = `#${formatedNumber}`;

  if (pkmIndex < 10) pkmIndex = `00${pkmIndex}`;
  else if (pkmIndex < 100) pkmIndex = `0${pkmIndex}`;

  return {
    formatedNumber,
    pkmIndex
  }
}
