const RootReducer = (
    state = {
        loading: false,
        signedup: false,
        user: {},
        posts: [],
        getPosts: false,
        postSuccess: false,
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

        case "PERSIST_USER":
        return{
            ...state,
            signedup: true, 
            user: action.user
        };

        case "LOGOUT_USER":
            localStorage.clear();
            return {
                ...state,
                signedup: false,
                getPosts: false,
                posts: [],
                user: {}
            }
        
        case "ADD_POST":
            return{
                ...state,
                postSuccess: true,
                posts: [...state.posts, action.post]
            };

        case "GET_POSTS":
            return {
                ...state,
                posts: [...state.posts, action.post],
                getPosts: true
            }
    };
};

export default RootReducer;