import React, { useState, createContext } from "react";

export const PeriodListContext = createContext();


export const PeriodListProvider = props => {
    
    const [perioddata, setperiodData] = useState([
        { name: "Event Number 1"},
        { name: "Event Number  2"},
        { name: "Quiz Number 1"},
        { name: "Quiz Number 2"},
        { name: "Quiz Number 3"},
        { name: "Quiz Number 4"},
        { name: "Quiz Number 5"},
    ]);
    
    return(
        <PeriodListContext.Provider value = {[perioddata,setperiodData]}>
            {props.children}
        </PeriodListContext.Provider>
    );
}