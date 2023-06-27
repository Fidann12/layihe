const initialState = {
  products: [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  favoriteModal: false,
  basketModal: false,
  previewModal: false,
  viewModalProdId: 1,
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_DETAILS":
      return { ...state, details: action.payload };
    case "SET_BASKET":
      localStorage.setItem("basket", JSON.stringify(action.payload));
      return { ...state, basket: action.payload };
    case "SET_FAVORITE_MODAL":
      return { ...state, favoriteModal: !state.favoriteModal };
    case "SET_BASKET_MODAL":
      return { ...state, basketModal: !state.basketModal };
    case "SET_PREVIEW_MODAL":
      return { ...state, previewModal: !state.previewModal };
    case "SET_FAVORITE":
      localStorage.setItem("favorite", JSON.stringify(action.payload));
      return { ...state, favorite: action.payload };
    case "SET_CATEGORIES":
      localStorage.setItem("categories", JSON.stringify(action.payload));
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}
