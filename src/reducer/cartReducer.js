// cartReducer.js
export const initialCartState = [];

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);

    case 'LOAD_CART':
      return action.payload || [];

    case 'SAVE_CART':
      localStorage.setItem('cart', JSON.stringify(state));
      return state;

    default:
      return state;
  }
};
