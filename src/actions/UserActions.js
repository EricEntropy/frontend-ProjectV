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
            debugger
            localStorage.setItem("jwt", response.jwt);
            dispatch({type: "ADD_USER", user: response.user})
        });
    };
};