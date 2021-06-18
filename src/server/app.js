import express from 'express';
import {render} from './utils'

const app = express();
// static中间件将所有静态文件路由指向public
app.use(express.static('public'));

app.get('/list', (req, res) => {
    console.log('088888', req.path)
    res.json({
        success: true,
        results: [{
            name: 'apple',
            objectId: '1'
        }, {
            name: 'eee',
            objectId: '2'
        }]
    })
})

app.get('*', (req, res) => {
    render(req, res)
})

app.listen(3000, () => console.log('Exampleapp listening on port 3000!'));