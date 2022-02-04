import React from 'react';
import Navigation from '../Includes/Navigation';

const Main = ({ children }: any) => {
    return (
        <div>
            <Navigation />
            {children}
        </div>
    );
};

export default Main;
