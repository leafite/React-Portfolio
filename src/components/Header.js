import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return(
        <header className="has-background-dark has-text-white py-4">
            <div className='container'>
                <h1 className='title is-2 has-text-centered'>
                    Christopher B.
                </h1>
                <Navigation />
            </div>
        </header>
    )
}
export default Header;