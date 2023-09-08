import { useState } from "react"

export const Parent = () => {
    const [userName, setUsername] = useState("Towhid")

    return (
        <div>
            {userName}
            <Child setUsername={setUsername} />
        </div>
    )
}


export const Child = ({setUsername}) => {
    return <Grandchild setUsername={setUsername} />
}


export const Grandchild = ({setUsername}) => {

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