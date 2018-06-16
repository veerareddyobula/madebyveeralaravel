// app.js

require('./bootstrap');
import React                from 'react';
import {Provider}           from 'react-redux';
import { HashRouter}        from 'react-router-dom';
import {Route, Switch}      from 'react-router-dom';
import { render }           from 'react-dom';

import configureStore       from './AppStore';
import Master               from './components/Master';

const store = configureStore();


export default class Main extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path="/" component={Master} />
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}

render(<Main />, document.getElementById('madebyveera'));