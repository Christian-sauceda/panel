import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import lpelicula from '../pages/Peliculaslist'
import mmovie from '../pages/mmovie'
import lmovie from '../pages/Movielist'
import login from '../pages/Login'


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={login} />
            <Route path='/inicio' exact component={Dashboard}/>
            <Route path='/peliculas' component={lpelicula}/>
            <Route path='/mmovie' component={mmovie}/>
            <Route path='/movielist' component={lmovie}/>
        </Switch>
    )
}

export default Routes
