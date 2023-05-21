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
  checkRating: { 4: false, 3: false },
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
          checkCategory: { ...state.checkCategry, isOrchids: true },
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
        checkRating: { ...state.checkRating, [action.payload]: true },
      };
    }
    case "SET_SORTING": {
      return { ...state, sortType: action.payload };
    }

    case "SELECT_DATABY_CATEGORY": {
      const catData = state.productData.filter(
        ({ categoryName }) => categoryName === action.payload
      );
      return { ...state, updatedProductData: catData };
    }
    case "RESET_ALL": {
      return {
        ...state,
        catType: [],
        sortType: null,
        rating: null,
        priceFilter: null,
        checkCategory: { isRoses: false, isLilies: false, isOrchids: false },
      };
    }

    case "ADD_ITEM": {
      return { ...state, cartData: action.payload };
    }

    case "ADD_TO_WISHLIST" : {
        return {...state, wishlistData:action.payload}
    }
    default:
      return state;
  }
};
