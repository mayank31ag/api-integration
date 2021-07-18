import React,{ Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import{getData,getAllData} from "../actions/fetchData"
import "../styles.css";

class DisplayData extends Component{

  handleLoadUsersClick = () => {
    this.props.onLoadUsersClick();

    // let's do our api call
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => this.props.onLoadUsersComplete(json));
  };
    
    render(){
        return(
            <div className="App">
                    
                    <div><NavLink to="/">Home</NavLink></div>
                    <div><NavLink to="/display">Display</NavLink></div>
                    <div><NavLink to="/performance">Performance</NavLink></div>
                    <div>
                    <p> Click below button to see the data</p>
                    <button onClick={this.handleLoadUsersClick}>Load Data</button>
                    </div>
                    {this.props.loading ? <p>loading...</p> : null}
                       {!this.props.loading && this.props.users ? (
                          <ol>
                            {this.props.users.map((user) => (
                              <li key={user.id}>
                                <strong>{user.name}</strong> | <strong>{user.email}</strong>| {user.body}
                                <hr/>
                              </li>
                            ))}
                          </ol>
                        ) : null}
                </div>

            
    
        );

    }

}

const mapStateToProps = (state) => ({
  users: state.users,
  loading: state.isLoading
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadUsersClick: () => {
      dispatch(getData());
    },
    onLoadUsersComplete: (users) => {
      dispatch(getAllData(users));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayData);