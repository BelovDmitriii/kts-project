const priceFormatter = (price: number): string => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
  return formattedPrice;
}

export default priceFormatter;