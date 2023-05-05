import React, { useState } from 'react';

const LoginContext = React.createContext();

const ProovedorLogin = ({children}) => {
    
    const [loginValue, setLoginValue] = useState(false);

    return ( 
        <LoginContext.Provider value={{ loginValue, setLoginValue }}>
            { children }
        </LoginContext.Provider>
    );
}

export {LoginContext, ProovedorLogin}