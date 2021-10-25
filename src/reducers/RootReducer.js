const RootReducer = (
    state = {
        loading: false,
        signedup: false,
        user: 0,
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

        case "LOGOUT_USER":
            return state;
    };
};

export default RootReducer;