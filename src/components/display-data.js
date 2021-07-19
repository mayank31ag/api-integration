import React,{ Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import{getAllData} from "../actions/fetchData"
import "../styles.css";

class DisplayData extends Component{

  handleLoadUsersClick = () => {
    this.props.onLoadUsersClick();
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
      dispatch(getAllData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayData);