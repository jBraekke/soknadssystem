import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import assign from 'es6-object-assign';
import es6 from 'es6-promise';
import { MuiThemeProvider } from '@material-ui/core/styles';

import reducers from './store/reducers';
import Layout from './components/layout/Layout';
import './style/app.scss'
import theme from './style/theme';

assign.polyfill();
es6.polyfill();

const loggerMiddleware = createLogger()
const store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware));

class Index extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <BrowserRouter>
                        <Layout />
                    </BrowserRouter>
                </Provider>
            </MuiThemeProvider>
        )
    }
}

let Application = document.getElementById("app");

render(<Index />, Application);