export const initialAddress = {
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
    case "RESET_ADDRESS_FORM": {
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
      console.log(state.name);
      return {
        ...state,
        addressData: [
          ...state.addressData,
          {
            name: state.name,
            houseNo: state.houseNo,
            city: state.city,
            state: state.state,
            country: state.country,
            postalCode: state.postalCode,
            mobile: state.mobile,
          },
        ],
      };
    }

    default:
      return state;
  }
};
