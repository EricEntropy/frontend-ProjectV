
export const userActions = (data) =>{
    return (dispatch) =>{
        dispatch({type: "LOADING_USER"});
        
        const configuration = {
            method: 'POST', 
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(data)
        };
        
        fetch("http://localhost:4000/users", configuration)
        .then((resp) => resp.json())
        .then((response) => {
            localStorage.setItem("jwt", response.jwt);
            dispatch({type: "ADD_USER", user: response.user})
        });
    };
};

export const userLogin = (data) =>{
    return (dispatch) =>{
        dispatch({type: "LOADING_USER"});
        
        const configuration = {
            method: 'POST', 
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(data)
        };
        
        fetch("http://localhost:4000/login", configuration)
        .then((resp) => resp.json())
        .then((response) => {
            if(response.message === "Invalid username or password"){
                window.alert(response.message);
                dispatch({type: "FAILED_USER"})
            } else{
                localStorage.setItem("jwt", response.jwt);
                localStorage.setItem("user_id", response.user.id);
                localStorage.setItem("username", response.user.username);
                dispatch({type: "ADD_USER", user: response.user})
            }
        });
    };
};


export const userLogout = () =>{
    return (dispatch) =>{
        console.log('loggin out')
        dispatch({type: "LOGOUT_USER"});
    }
}

export const userPost = (postData) =>{
    return (dispatch) =>{

        const token = localStorage.getItem("jwt");
        const configuration = {
            method: 'POST', 
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(postData.post)
        };
        
        fetch(`http://localhost:4000/users/${postData.user_id}/posts`, configuration)
        .then((resp) => resp.json())
        .then((response) => {
            const newPost = {
                title: response.title,
                content: response.content,
                id: response.id
            }
            dispatch({type: "ADD_POST", post: newPost})
        })
    };
}

export const userGetPosts = (user_id) =>{
    return (dispatch) =>{
        dispatch({type: "LOADING_USER"});

        const token = localStorage.getItem("jwt");
        const configuration = {
            method: 'GET', 
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
                'Authorization': `Bearer ${token}`
            }
        };
        fetch(`http://localhost:4000/users/${user_id}/posts`, configuration)
        .then((resp) => resp.json())
        .then((response) => {
            response.map((post) => {
                const fetchedPost = {
                    title: post.title,
                    content: post.content,
                    id: post.id
                }
            dispatch({type: "GET_POSTS", post: fetchedPost})
            })
        })
    };
};

export const userDeletePost = (user_id, post_id) =>{
    return (dispatch) =>{
        console.log("deleting post");
        const token = localStorage.getItem("jwt");
        const configuration = {
            method: 'DELETE', 
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
                'Authorization': `Bearer ${token}`
            }
        };
        fetch(`http://localhost:4000/users/${user_id}/posts/${post_id}`, configuration)
        dispatch({type: "DELETE_POST", id: post_id})
    }
}

