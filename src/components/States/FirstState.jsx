import { useState } from "react";

const FirstState = () => {
    const [user,setUser] = useState({name:"Bhavik",age:27});

    const updateUser = () => {
        setUser({...user, age: user.age + 1})
    }
    return (
        <div>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <button className="cursor-pointer" onClick={updateUser}>Click me..!!</button>
        </div>
    )
}

export default FirstState