import React from 'react'
import { StaticRouter, Route } from 'react-router-dom'
import {renderToString} from 'react-dom/server'
import routers from '../Routers'
import { Provider } from 'react-redux'
import getStore from '../store'
import { matchPath } from "react-router-dom";

export const render = (req, res) => {
    const store = getStore();
    const matchRouters = []
    routers.some(router => {
        const match = matchPath(req.path, router);
        if (match) {
            matchRouters.push(router);
        }
        return match;
    })
    const promises = []
    matchRouters.forEach(router => {
        promises.push(router.loadData(store))
    })
    console.log(promises, 'promises')
    if (promises.length > 0) {
        Promise.all(promises).then((data) => {
            const content = renderToString((
                <Provider store={store}>
                    <StaticRouter location={req.path} context={{}}>
                        <div>{routers.map(route => <Route {...route} />)}</div>
                    </StaticRouter>
                </Provider>
            ))
        
            res.send(`
                <html>
                    <head>
                        <title>ssr demo</title>
                    </head>
                    <body>
                        <div id="root">${content}</div>
                        <script src="./index.js"></script>
                    </body>
                </html>
            `)
        }).catch(err => {
            console.log(err)
        })
    }
    
}