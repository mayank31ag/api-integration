import { Component } from 'react';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom';
import Home from '../components/home';
import DisplayData from '../components/display-data';
import DisplayPerformance from '../components/display-performance'

class MockRoutes extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/display" component={DisplayData}/>
                <Route path="/performance" component={DisplayPerformance}/>
                <Route render={()=> <Redirect to="/"/>} />
            </Switch>
            </BrowserRouter>
        );

    }
}

export default MockRoutes;