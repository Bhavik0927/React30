import ChildProp from "../Pages/ChildProp.jsx"
import { useState } from "react";

const ParentProps = () => {
    const [message, setMessage] = useState("Hello from parents");

    const onHandleChange = () =>{
        setMessage("Hello from parents 2")
    }
    return (
        <div>
            <h1>{message}</h1>
            <ChildProp  onButtonClick={onHandleChange}/>
        </div>
    )
}

export default ParentProps;
