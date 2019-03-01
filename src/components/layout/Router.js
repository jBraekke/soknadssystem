import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Søknader from '../pages/Søknader'
import Saker from '../pages/Saker'
import NotAllowed from '../pages/No'
import Profile from '../pages/Profile'
import Soknad from '../pages/Søknad';
import Vedtak from '../pages/Vedtak';
import routes from '../../infrastruktur/routes';

const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path={routes.home} component={Søknader} />
            <Route path={routes.soknad} component={Soknad} />
            <Route exact path={routes.saker} component={Saker} />
            <Route path={routes.profile} component={Profile} />
            <Route path='/notallowed' component={NotAllowed} />
            <Route path={routes.vedtak} component={Vedtak} />
        </Switch>
    </main>
)

export default Main