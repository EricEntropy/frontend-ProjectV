import React from "react";

class Logout extends React.Component{

    handleSubmit= (e) =>{
        e.preventDefault();
        localStorage.clear();
        this.props.signedup = false;
    }

    render(){
        
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Log Out</h1>
                    <input type="submit" value="Logout"></input>
                </form>
            </div>
        )
    }

}

export default Logout;