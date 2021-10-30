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
        postUpdate: false,
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

        case "UPDATE_POST":
            const currentPosts = state.posts.filter(post => post.id != action.post.id)
            currentPosts.push(action.post);
            currentPosts.sort(function(a, b){return a.id - b.id});
            return{
                ...state,
                postUpdate: true,
                posts: currentPosts
            };

        case "GET_POSTS":
            return {
                ...state,
                posts: [...state.posts, action.post],
                getPosts: true
            }

        case "DELETE_POST":
            const postsToStay = state.posts.filter(post => post.id != action.id)
            return{
                ...state,
                posts: postsToStay
            }
    };
};

export default RootReducer;