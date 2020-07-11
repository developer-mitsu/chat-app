import React from 'react'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './pages/Room'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Switch>
                {/* http://locolhost:3000/login */}
                <Route path='/signup' component={SignUp} /> 
                <Route path='/login' component={Login} />
                <Route path='/' component={Room} />
            </Switch>
        </Router>
    )
}

export default App