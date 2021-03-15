import CoinsActionTypes from './coins.types';

const initialState = {
  allCoinsPerPage: [],
  page: 1,
  selectedCoin: {},
  allAvailableCoins: [],
  currentExchangeRate: null,
  selectedConverterCoin: {},
  loading: false,
  error: null,
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case CoinsActionTypes.LOAD_COINS_START:
    case CoinsActionTypes.LOAD_NEW_COINS_PAGE_START:
    case CoinsActionTypes.LOAD_COIN_DETAIL_START:
    case CoinsActionTypes.LOAD_ALL_AVAILABLE_COINS_START:
    case CoinsActionTypes.GET_COIN_EXCHANGE_RATE_START:
      return {
        ...state,
        loading: true,
      };

    case CoinsActionTypes.LOAD_COINS_SUCCESS:
      return {
        ...state,
        allCoinsPerPage: action.payload,
        loading: false,
        error: null,
      };

    case CoinsActionTypes.LOAD_NEW_COINS_PAGE_SUCCESS:
      const newPage =
        action.payload.page === state.page
          ? state.allCoinsPerPage
          : action.payload.coinsData;
      return {
        ...state,
        allCoinsPerPage: newPage,
        page: action.payload.page,
        loading: false,
      };

    case CoinsActionTypes.LOAD_COIN_DETAIL_SUCCESS:
      return {
        ...state,
        selectedCoin: action.payload,
        loading: false,
        error: null,
      };

    case CoinsActionTypes.LOAD_ALL_AVAILABLE_COINS_SUCCESS:
      return {
        ...state,
        allAvailableCoins: action.payload,
        loading: false,
        error: null,
      };

    case CoinsActionTypes.GET_COIN_EXCHANGE_RATE_SUCCESS:
      return {
        ...state,
        currentExchangeRate: action.payload.exchangeRate,
        selectedConverterCoin: state.allAvailableCoins?.filter(
          (coin) => coin.id === action.payload.id,
        )[0],
        loading: false,
        error: null,
      };

    case CoinsActionTypes.LOAD_COINS_FAIL:
    case CoinsActionTypes.LOAD_COIN_DETAIL_FAIL:
    case CoinsActionTypes.LOAD_NEW_COINS_PAGE_FAIL:
    case CoinsActionTypes.LOAD_COIN_DETAIL_FAIL:
    case CoinsActionTypes.LOAD_ALL_AVAILABLE_COINS_FAIL:
    case CoinsActionTypes.GET_COIN_EXCHANGE_RATE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default coinReducer;
