import React, { useContext } from 'react';
import { DefaultContext } from '../../contexts/DefaultContext';
import Navigation from '../Includes/Navigation';

const Main = ({ children }: any) => {

    const { loading, setLoading }: any = useContext(DefaultContext)

    return (
        <div>
            <Navigation setLoading={setLoading} />
            {children}
        </div>
    );
};

export default Main;
