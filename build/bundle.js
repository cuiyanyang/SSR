/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Routers.js":
/*!************************!*\
  !*** ./src/Routers.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./components/Home */ \"./src/components/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./components/Login */ \"./src/components/Login.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const Router = () => {\n//     return (\n//         <div>\n//             <Route path=\"/\" exact component={Home} />\n//             <Route path=\"/login\" exact component={Login} />\n//         </div>\n//     )\n// }\n\n// export default Router;\n\nexports.default = [{\n    path: '/',\n    component: _Home2.default,\n    exact: true,\n    loadData: _Home2.default.loadData,\n    key: 'Home'\n}, {\n    path: '/login',\n    component: _Login2.default,\n    exact: true,\n    key: 'Login'\n}];\n\n//# sourceURL=webpack://ssr/./src/Routers.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/' },\n            'home'\n        ),\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/login' },\n            'Login'\n        )\n    );\n};\n\nexports.default = Header;\n\n//# sourceURL=webpack://ssr/./src/components/Header.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home(_ref) {\n    var name = _ref.name,\n        getList = _ref.getList,\n        list = _ref.list;\n\n    // useEffect(() => {\n    //     getList()\n    // }, [])\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n            'div',\n            null,\n            'home,',\n            name\n        ),\n        _react2.default.createElement(\n            'p',\n            null,\n            'list messgae:'\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            list && list.length > 0 ? _react2.default.createElement(\n                'ul',\n                null,\n                list.map(function (l, i) {\n                    return _react2.default.createElement(\n                        'li',\n                        { key: l.objectId },\n                        l.name\n                    );\n                })\n            ) : ''\n        ),\n        _react2.default.createElement(\n            'p',\n            null,\n            _react2.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                        return alert('555');\n                    } },\n                'add'\n            )\n        )\n    );\n};\n\nHome.loadData = function (store) {\n    return store.dispatch(getData());\n};\n\nvar getData = function getData() {\n    return function (dispatch) {\n        return (0, _axios2.default)({\n            // url: 'https://api.bmob.cn/1/classes/product',\n            url: 'http://localhost:3000/list',\n            method: 'get'\n            // headers: {\n            //     'Content-Type': 'application/json',\n            //     'X-Bmob-Application-Id': 'ba3c1dfc4ad75cd1c045a6f46bd64a9f',\n            //     'X-Bmob-REST-API-Key': 'a90391b9f0a64e25c7313ec8b57ac51d',\n            // }\n        }).then(function (res) {\n            var list = res.data.results;\n            dispatch({ type: 'CHANGE_LIST', payload: list });\n        });\n    };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        name: state.name,\n        list: state.list\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        getList: function getList() {\n            return dispatch(getData());\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\n//# sourceURL=webpack://ssr/./src/components/Home.js?");

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        'login'\n    );\n};\n\nexports.default = Login;\n\n//# sourceURL=webpack://ssr/./src/components/Login.js?");

/***/ }),

/***/ "./src/server/app.js":
/*!***************************!*\
  !*** ./src/server/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n// static中间件将所有静态文件路由指向public\napp.use(_express2.default.static('public'));\n\napp.get('/list', function (req, res) {\n    console.log('088888', req.path);\n    res.json({\n        success: true,\n        results: [{\n            name: 'apple',\n            objectId: '1'\n        }, {\n            name: 'eee',\n            objectId: '2'\n        }]\n    });\n});\n\napp.get('*', function (req, res) {\n    (0, _utils.render)(req, res);\n});\n\napp.listen(3000, function () {\n    return console.log('Exampleapp listening on port 3000!');\n});\n\n//# sourceURL=webpack://ssr/./src/server/app.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _Routers = __webpack_require__(/*! ../Routers */ \"./src/Routers.js\");\n\nvar _Routers2 = _interopRequireDefault(_Routers);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(req, res) {\n    var store = (0, _store2.default)();\n    var matchRouters = [];\n    _Routers2.default.some(function (router) {\n        var match = (0, _reactRouterDom.matchPath)(req.path, router);\n        if (match) {\n            matchRouters.push(router);\n        }\n        return match;\n    });\n    var promises = [];\n    matchRouters.forEach(function (router) {\n        promises.push(router.loadData(store));\n    });\n    console.log(promises, 'promises');\n    if (promises.length > 0) {\n        Promise.all(promises).then(function (data) {\n            var content = (0, _server.renderToString)(_react2.default.createElement(\n                _reactRedux.Provider,\n                { store: store },\n                _react2.default.createElement(\n                    _reactRouterDom.StaticRouter,\n                    { location: req.path, context: {} },\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _Routers2.default.map(function (route) {\n                            return _react2.default.createElement(_reactRouterDom.Route, route);\n                        })\n                    )\n                )\n            ));\n\n            res.send('\\n                <html>\\n                    <head>\\n                        <title>ssr demo</title>\\n                    </head>\\n                    <body>\\n                        <div id=\"root\">' + content + '</div>\\n                        <script src=\"./index.js\"></script>\\n                    </body>\\n                </html>\\n            ');\n        }).catch(function (err) {\n            console.log(err);\n        });\n    }\n};\n\n//# sourceURL=webpack://ssr/./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = function reducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: 'yyy' };\n    var action = arguments[1];\n\n    return _extends({}, state, {\n        list: action.payload || []\n    });\n};\n\nvar getStore = function getStore() {\n    return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n};\n\nexports.default = getStore;\n\n//# sourceURL=webpack://ssr/./src/store/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/app.js");
/******/ 	
/******/ })()
;