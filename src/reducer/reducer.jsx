export const initialValue = {
  categoryData: [],
  productData: [],
  cartData: [],
  wishlistData: [],
  searchText: null,
  catType: [],
  sortType: null,
  rating: null,
  priceFilter: null,
  updatedProductData: [],
  checkCategory: { isRoses: false, isLilies: false, isOrchids: false },
  checkRating: null,
  checkSort: null,
};

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "GET_CATEGORY_DATA": {
      return { ...state, categoryData: action.payload };
    }
    case "GET_PRODUCT_DATA": {
      return {
        ...state,
        productData: action.payload,
        updatedProductData: action.payload,
      };
    }

    case "SEARCH_TEXT": {
      return { ...state, searchText: action.payload };
    }

    case "SET_PRICE": {
      return { ...state, priceFilter: action.payload };
    }

    case "SET_ROSES": {
      if (action.payload.value === "Roses" && action.payload.checked) {
        return {
          ...state,
          catType: [...state.catType, action.payload.value],
          checkCategory: { ...state.checkCategory, isRoses: true },
        };
      } else {
        const filArr = state.catType.filter(
          (ele) => ele !== action.payload.value
        );
        return {
          ...state,
          catType: filArr,
          checkCategory: { ...state.checkCategory, isRoses: false },
        };
      }
    }

    case "SET_LILIES": {
      if (action.payload.value === "Lilies" && action.payload.checked) {
        return {
          ...state,
          catType: [...state.catType, action.payload.value],
          checkCategory: { ...state.checkCategory, isLilies: true },
        };
      } else {
        const filArr = state.catType.filter(
          (ele) => ele !== action.payload.value
        );
        return {
          ...state,
          catType: filArr,
          checkCategory: { ...state.checkCategory, isLilies: false },
        };
      }
    }

    case "SET_ORCHIDS": {
      if (action.payload.value === "Orchids" && action.payload.checked) {
        return {
          ...state,
          catType: [...state.catType, action.payload.value],
          checkCategory: { ...state.checkCategory, isOrchids: true },
        };
      } else {
        const filArr = state.catType.filter(
          (ele) => ele !== action.payload.value
        );
        return {
          ...state,
          catType: filArr,
          checkCategory: { ...state.checkCategory, isOrchids: false },
        };
      }
    }
    case "SET_RATING": {
      return {
        ...state,
        rating: action.payload,
        checkRating: action.payload,
      };
    }
    case "SET_SORTING": {
      return { ...state, sortType: action.payload, checkSort: action.payload };
    }

    case "SELECT_ROSE": {
      const obj = { ...state.checkCategory, isRoses: true };
      const arr = [action.payload];
      return {
        ...state,
        catType: arr,
        checkCategory: obj,
      };
    }

    case "SELECT_LILIES": {
      const obj = { ...state.checkCategory, isLilies: true };
      const arr = [action.payload];
      return {
        ...state,
        catType: arr,
        checkCategory: obj,
      };
    }

    case "SELECT_ORCHIDS": {
      const obj = { ...state.checkCategory, isOrchids: true };
      const arr = [action.payload];
      return {
        ...state,
        catType: arr,
        checkCategory: obj,
      };
    }
    case "RESET_ALL": {
      return {
        ...state,
        catType: [],
        sortType: null,
        rating: null,
        priceFilter: "",
        checkCategory: { isRoses: false, isLilies: false, isOrchids: false },
        checkRating: null,
        checkSort: null,
        searchText: "",
      };
    }

    case "ADD_ITEM": {
      return { ...state, cartData: action.payload };
    }

    case "ADD_TO_WISHLIST": {
      return { ...state, wishlistData: action.payload };
    }

    case "CLEAR_CART" : {
      return {...state,cartData:[]}
    }
    default:
      return state;
  }
};
