import { useEffect } from "react";
import { useRef } from "react"

const FirstRef = () => {
    const inputRef = useRef(null);
    
    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Focus on the input..." />
        </div>
    )
}

export default FirstRef