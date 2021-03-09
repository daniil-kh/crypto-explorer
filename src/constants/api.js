export const apiUrl = 'https://api.coingecko.com/api/v3/';
export const coinsUrl = `${apiUrl}coins/`;
export const marketCoinsUrl = `${coinsUrl}markets/`;
export const coinDetailUrl = (id) => `${coinsUrl}${id}`;
