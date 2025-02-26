import { useState } from "react";
import ChildComponent from "../Pages/ChildComponent";

const Page15 = () => {
    const [message,setMessage] = useState();

    const handleMessage = (msg) =>{
        setMessage(msg);
    }
    return (
        <div>
            <h2>Parent Components: {message}</h2>
            <ChildComponent childMessage={handleMessage}  />
        </div>
    )
}

export default Page15