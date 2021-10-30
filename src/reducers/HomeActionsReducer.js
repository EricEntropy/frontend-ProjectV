const HomeActionsReducer = (
    state = { 
        allPosts: [],
        allPostsReceived: false
    }, action) => {

        switch(action.type){
            default:
                return state;
            
            case "GET_ALL_POSTS":
                debugger
                return {
                    ...state,
                    allPosts: action.posts,
                }

            case "GET_ALL_POSTS_DONE":
                return {
                    ...state,
                    allPostsReceived: true
                }
            
            case "GET_ALL_POSTS_PENDING":
                return {
                    ...state,
                    allPostsReceived: false
                }
        }
    }

export default HomeActionsReducer;
