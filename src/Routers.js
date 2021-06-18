import React from 'react'
import {Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

// const Router = () => {
//     return (
//         <div>
//             <Route path="/" exact component={Home} />
//             <Route path="/login" exact component={Login} />
//         </div>
//     )
// }

// export default Router;

export default [{
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
    key: 'Home'
}, {
    path: '/login',
    component: Login,
    exact: true,
    key: 'Login'
}]