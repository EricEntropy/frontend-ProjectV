export const homeGetAllPosts = () =>{
    return (dispatch) =>{
        const token = localStorage.getItem("jwt");
        const configuration = {
            method: 'GET', 
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
                'Authorization': `Bearer ${token}`
            }
        };

        fetch(`http://localhost:4000/allposts`, configuration)
        .then((resp) => resp.json())
        .then((response) => {
            dispatch({type: "GET_ALL_POSTS", posts: response})
            })
            dispatch({type: "GET_ALL_POSTS_DONE"})
    }
}

// export const UpvotePost = (user_id, post_id, postData) =>{
//     return (dispatch) =>{
//         const token = localStorage.getItem("jwt");
//         const configuration = {
//             method: 'PATCH', 
//             headers: {
//                 'Content-Type': "application/json",
//                 'Accept': "application/json",
//                 'Authorization': `Bearer ${token}`
//             },
//             body: JSON.stringify(postData)
//         };

//     }
// }

// export const DownvotePost = () =>{
//     return (dispatch) =>{
//     }
// }
