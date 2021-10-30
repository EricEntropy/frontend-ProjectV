const HomeActionsReducer = (
    state = { 
        allPosts: [],
        allPostsReceived: false
    }, action) => {

        switch(action.type){
            default:
                return state;
            
            case "GET_ALL_POSTS":
                return {
                    ...state,
                    allPosts: [...state.allPosts, action.post],
                }

            case "GET_ALL_POSTS_DONE":
                debugger
                return {
                    ...state,
                    allPostsReceived: true
                }
        }
    }

export default HomeActionsReducer;
