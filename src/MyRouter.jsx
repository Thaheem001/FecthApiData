import React from 'react'
import ApiFecth from './ApiFecth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";
const MyRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/'>
                        <ApiFecth />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default MyRouter
