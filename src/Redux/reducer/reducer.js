const initialState = {
    token:[]
} 

const reducer = (state=initialState,action) =>{
    switch (action.type){
        case "SET_LOGIN":
            return  {
                ...state,
                token:action.payload
            }
        default:
            return state
    }
}

export default reducer;

