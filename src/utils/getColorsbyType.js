export const getColorByType = (type) => {
  const colors = {
    'grass': '#8BD750',
    'fire': '#F25244',
    'water': '#55AEFE',
    'bug': '#C3D21F',
    'normal': '#BAB7B0',
    'poison': '#AA5FA2',
    'fairy': '#FAADFF',
    'electric': '#FCE439',
    'ground': '#E9C950',
    'ghost': '#7570CE',
    'dragon': '#8570F9',
    'fighting': '#A55949',
    'rock': '#CCBD7A',
    'ice': '#96F2FF',
    'psychic': '#F266AF',
    'steel': '#C7C5DD',
    'flying': '#6A7AE2'
  }

  return colors[type];
}
