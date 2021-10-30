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
            response.map((post) => {
                const fetchedPost = {
                    title: post.title,
                    content: post.content,
                    id: post.id,
                    likes: post.likes
                }
            dispatch({type: "GET_ALL_POSTS", post: fetchedPost})
            })
            dispatch({type: "GET_ALL_POSTS_DONE"})
        })
    }
}
