const RootReducer = (
    state = {
        loading: false,
        signedup: false,
        user: 0,
        token: localStorage.jwt,
        failedlogin: false,
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

        case "FAILED_USER":
            return{
                ...state,
                signedup: false, 
                failedlogin: true,
            };

        case "LOGOUT_USER":
            localStorage.clear();
            return {
                ...state,
                signedup: false,
            }
    };
};

export default RootReducer;