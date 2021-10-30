const HomeActionsReducer = (
    state = { 
        allPosts: [],
        allPostsReceived: false
    }, action) => {

        switch(action.type){
            default:
                return state;
            
            case "GET_ALL_POSTS":
                const currentAllPosts =state.allPosts.filter(post => post.id != action.post.id);
                currentAllPosts.push(action.post);
                return {
                    ...state,
                    allPosts: currentAllPosts,
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
