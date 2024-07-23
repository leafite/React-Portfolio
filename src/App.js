import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './App.css';

function App(){
    return(
        <div className='App'>
            <Header />
            <main>
                <Switch>
                    <Route path='/' Component={AboutMe} />
                    <Route path='/portfolio' Component={Portfolio} />
                    <Route path='/contact' Component={Contact} />
                    <Route path='/resume' Component={Resume} />
                </Switch>
            </main>
        </div>
    );
}

export default App;