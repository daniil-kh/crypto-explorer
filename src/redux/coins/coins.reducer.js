import CoinsActionTypes from './coins.types';

const initialState = {
  allCoinsPerPage: [],
  selectedCoin: {},
  page: 1,
  loading: false,
  error: null,
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case CoinsActionTypes.LOAD_COINS_START:
    case CoinsActionTypes.LOAD_NEW_COINS_PAGE_START:
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
      const coinsWithNewPage = [
        ...state.allCoinsPerPage,
        ...action.payload.coinsData,
      ];
      return {
        ...state,
        allCoinsPerPage: coinsWithNewPage,
        page: action.payload.page,
      };

    case CoinsActionTypes.LOAD_COIN_DETAIL_SUCCESS:
      return {
        ...state,
        selectedCoin: action.payload,
        loading: false,
        error: null,
      };

    case CoinsActionTypes.LOAD_COINS_FAIL:
    case CoinsActionTypes.LOAD_COIN_DETAIL_FAIL:
    case CoinsActionTypes.LOAD_NEW_COINS_PAGE_FAIL:
      console.log(action);
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
