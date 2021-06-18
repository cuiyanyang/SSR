import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import routers from '../Routers'
import { Provider } from 'react-redux'
import getStore from '../store'


const App = () => {
    return (
        <Provider store={getStore()}>
            <BrowserRouter>
                <div>{routers.map(router => <Route {...router} />)}</div>
            </BrowserRouter>
        </Provider>
    )
}

export default App;