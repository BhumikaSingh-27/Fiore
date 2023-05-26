import { v4 as uuid } from "uuid";

export const initialAddress = {
  id: null,
  name: null,
  houseNo: null,
  city: null,
  state: null,
  country: null,
  postalCode: null,
  mobile: null,
  addressData: [],
};

export const orderReducerFn = (state, action) => {
  switch (action.type) {
    case "FILL_DUMMY_ADDRESS": {
      return {
        ...state,
        name: "Bhumika Singh",
        houseNo: "savita sadan, road no 18/4A",
        city: "Patna",
        state: "Bihar",
        country: "India",
        postalCode: "800024",
        mobile: "7999899345",
      };
    }
    case "RESET_ADDRESS": {
      return {
        ...state,
        name: null,
        houseNo: null,
        city: null,
        state: null,
        country: null,
        postalCode: null,
        mobile: null,
      };
    }

    case "DEFAULT_ADDRESS": {
      return { ...state, addressData: action.payload };
    }

    case "ADD_ADDRESS": {
      const add = {
        name: state.name,
        houseNo: state.houseNo,
        city: state.city,
        state: state.state,
        country: state.country,
        postalCode: state.postalCode,
        mobile: state.mobile,
      };
      

      if (state.id) {
        return {
          ...initialAddress,
          addressData: state.addressData.map((item) => {
            if (state.id === item.id) {
              return { ...item, ...add };
            }
            return item;
          }),
        };
      }
      return {
        ...initialAddress,
        addressData: [...state.addressData, { ...add, id: uuid() }],
      };
      
    }
    case "EDIT_ADDRESS": {
      const {
        id,
        name,
        houseNo,
        city,
        state: stateName,
        country,
        postalCode,
        mobile,
      } = action.payload;

      return {
        ...state,
        id: id,
        name: name,
        houseNo: houseNo,
        city: city,
        state: stateName,
        country: country,
        postalCode: postalCode,
        mobile: mobile,
      };
    }
    case "REMOVE_ADD": {
      const upAdd = state?.addressData.filter(
        ({ postalCode }) => postalCode !== action.payload
      );
      return { ...state.addressData, addressData: upAdd };
    }
    case "SET_NAME": {
      return { ...state, name: action.payload };
    }
    case "SET_HOUSENO": {
      return { ...state, houseNo: action.payload };
    }
    case "SET_CITY": {
      return { ...state, city: action.payload };
    }
    case "SET_STATE": {
      return { ...state, state: action.payload };
    }
    case "SET_COUNTRY": {
      return { ...state, country: action.payload };
    }
    case "SET_POSTAL": {
      return { ...state, postalCode: action.payload };
    }
    case "SET_NUMBER": {
      return { ...state, mobile: action.payload };
    }
    default:
      return state;
  }
};
