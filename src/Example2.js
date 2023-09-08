import { useState, createContext, useContext } from "react"
import App from "./App";

const AppContext = createContext(null);



export const Parent = () => {
    const [userName, setUsername] = useState("Towhid")

    return (
        <AppContext.Provider value={{ userName, setUsername}}>
            <Child1 />
            <Child2 />
        </AppContext.Provider>


    )
}


export const Child1 = () => {
    const {userName} = useContext(AppContext);
    return <h1>{userName}</h1>
}


export const Child2 = () => {

    const {setUsername} = useContext(AppContext);

    return (
        <div>
            <button 
              onClick={() => {
                setUsername("NewName")
              }}
            >
                Change Username
            </button>
        </div>
    )
}