import React, { createContext, useState } from 'react';

export const ShipmentContext = createContext();

const ShipmentProvider = ({children}) => {
    const [data, setData] = useState({
        road:'',
    });
    return (
        <ShipmentContext.Provider value={[data, setData]}>
            {children}
        </ShipmentContext.Provider>
    );
};

export default ShipmentProvider;