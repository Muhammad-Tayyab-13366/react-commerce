

const ProductReducer = (state, action) => {
    /*
    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        isFeatureProducts: []
    }
    */

    switch(action.type){
        case "SET_LOADING":
            return {...state, isLoading: true}
          
        case "API_ERROR":
            return {...state, isLoading: false, isError: true}
         
        case "SET_API_DATA":
            const featureProData = action.payload.filter((product) => {
                return product.featured === true
            }); 

            return {...state, 
                isLoading: false,
                isError: false, 
                products: action.payload, 
                featureProducts: featureProData
            }
            
        default:
            return state;
    }

   
}

export default ProductReducer;