const RootReducer = (
    state = {
        loading: false,
        signedup: false,
        user: 0,
        posts: [],
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

        case "LOGOUT_USER":
            localStorage.clear();
            return {
                ...state,
                signedup: false,
            }
        
        case "ADD_POST":
            const post = {
                title: action.post.title,
                content: action.post.content
            };
            return{
                ...state,
                postSuccess: true,
                posts: [...state.posts, post]
            };

        case "GET_POSTS":
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
    };
};

export default RootReducer;