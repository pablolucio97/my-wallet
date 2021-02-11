import React from 'react'

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import List from '../pages/List'

import Layout from '../components/Layout'

const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Layout>
                <Route path='/' component={Dashboard} exact />
                <Route path='/list/:type' component={List} />
            </Layout>
        </Switch>
    </BrowserRouter>

)

export default AppRoutes