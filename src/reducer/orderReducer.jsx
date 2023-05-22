
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

export const orderReducerFn = (address, action) => {
  switch (action.type) {
    case "FILL_DUMMY_ADDRESS": {
        const newAdd= {name: "Bhumika Singh",
        houseNo: "savita sadan, road no 18/4A",
        city: "Patna",
        state: "Bihar",
        country: "India",
        postalCode: "800024",
        mobile: "7999899345",}

      return {
        name: "Bhumika Singh",
        houseNo: "savita sadan, road no 18/4A",
        city: "Patna",
        state: "Bihar",
        country: "India",
        postalCode: "800024",
        mobile: "7999899345",
        addressData:[newAdd]
    };
    }
    
    case "ADD_ADDRESS": {
      console.log(address.name);
      return { ...address, addressList: [...address.adddressList] };
    }

    default:
      return address;
  }
};
