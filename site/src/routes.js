import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Setting from './pages/settings'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/settings" exact={true} component={Setting} />
            </Switch>
        </BrowserRouter>
    )
}