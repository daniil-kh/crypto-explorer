export const sortByPrice = (data, filter) => {
  if (filter === 'desc') {
    return [...data].sort((coinOne, coinTwo) => {
      if (coinOne.current_price < coinTwo.current_price) {
        return 1;
      }
      if (coinOne.current_price > coinTwo.current_price) {
        return -1;
      }
      return 0;
    });
  }
  if (filter === 'asc') {
    return [...data].sort((coinOne, coinTwo) => {
      if (coinOne.current_price > coinTwo.current_price) {
        return 1;
      }
      if (coinOne.current_price < coinTwo.current_price) {
        return -1;
      }
      return 0;
    });
  }

  return data;
};

export const sortByPriceChange = (data, filter) => {
  if (filter === 'desc') {
    return [...data].sort((coinOne, coinTwo) => {
      if (
        coinOne.price_change_percentage_1h_in_currency <
        coinTwo.price_change_percentage_1h_in_currency
      ) {
        return 1;
      }
      if (
        coinOne.price_change_percentage_1h_in_currency >
        coinTwo.price_change_percentage_1h_in_currency
      ) {
        return -1;
      }
      return 0;
    });
  }
  if (filter === 'asc') {
    return [...data].sort((coinOne, coinTwo) => {
      if (
        coinOne.price_change_percentage_1h_in_currency >
        coinTwo.price_change_percentage_1h_in_currency
      ) {
        return 1;
      }
      if (
        coinOne.price_change_percentage_1h_in_currency <
        coinTwo.price_change_percentage_1h_in_currency
      ) {
        return -1;
      }
      return 0;
    });
  }

  return data;
};

export const sortByFilter = (data, filter) => {
  if (filter.price_change) {
    return sortByPriceChange(data, filter.price_change);
  } else if (filter.price) {
    return sortByPrice(data, filter.price);
  }

  return data;
};
