const RootReducer = (
    state = {
        loading: false,
        signedup: false,
        user: "",
    }, action) => {
    
    switch(action.type){
        default:
            return state;

        case "LOADING_USER":
            return{
                ...state, 
                loading: true
            };
        
        case "ADD_USER":
            return{
                ...state,
                loading: false,
                signedup: true,
                user: action.user
            };
    };
};

export default RootReducer;