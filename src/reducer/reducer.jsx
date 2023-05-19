export const initialValue = {
    categoryData:[],
    productData:[],
    cartData:[],
    wishlistData:[],
    searchText:null,
    catType: [],
    sortType:null,
    rating:null,
    priceFilter:null

}

export const reducerFn = (state,action)=>{
    switch(action.type){
        case "GET_CATEGORY_DATA" : {
            return {...state, categoryData:action.payload}
        }
        case "GET_PRODUCT_DATA" : {
            return {...state, productData:action.payload}
        }
        default:return state
    }
}