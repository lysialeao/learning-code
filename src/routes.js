import React from 'react'
import { Route, BrowserRouter, Routes as Router } from "react-router-dom"

import ArrayMethods from './views/ArrayMethods'
import Map from './components/Map'

const routes = [
    {
        'element': <ArrayMethods />,
        'path': '/'
    },
    {
        'element': <Map />,
        'path': 'array-methods/map'
    }
]

const Routes = () => {
   return(
       <BrowserRouter>
            <Router>
                {routes.map((route, index) => <Route
                    key={index}
                    element={route.element}
                    path={route.path} />)}
            </Router>
       </BrowserRouter>
   )
}

export default Routes
