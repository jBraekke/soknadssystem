import React from 'react';
import Header from './Header';
import MainMenu from './MainMenu';
import Router from './Router';
import Footer from './Footer';

class Layout extends React.Component {
    render() {
        return (<div>
            <Header />
            <MainMenu />
            <Router />
            <Footer />
        </div>)
    }
}

export default Layout;