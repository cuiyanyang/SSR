import React, {useEffect} from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import axios from 'axios'

const Home = ({name, getList, list}) => {
    // useEffect(() => {
    //     getList()
    // }, [])

    return (
        <div>
            <Header />
            <div>home,{name}</div>
            <p>list messgae:</p>
            <div>
                {list && list.length > 0 ? (
                    <ul>
                        {list.map((l, i) => (
                            <li key={l.objectId}>{l.name}</li>
                        ))}
                    </ul>
                ) : ''}
            </div>
            <p><button onClick={() => alert('555')}>add</button></p>
        </div>
    )
}

Home.loadData = (store) => {
    return store.dispatch(getData());
}

const getData = () => {
    return (dispatch) => {
        return axios({
            // url: 'https://api.bmob.cn/1/classes/product',
            url: 'http://localhost:3000/list',
            method: 'get',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'X-Bmob-Application-Id': 'ba3c1dfc4ad75cd1c045a6f46bd64a9f',
            //     'X-Bmob-REST-API-Key': 'a90391b9f0a64e25c7313ec8b57ac51d',
            // }
        }).then(res => {
            const list = res.data.results;
            dispatch({type: 'CHANGE_LIST', payload: list})
        })
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        list: state.list,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getList: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);