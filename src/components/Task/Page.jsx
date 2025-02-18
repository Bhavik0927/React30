import { useState } from "react";

const Page = () => {
    const [visible, setVisible] = useState('true');

    return (
        <>
            {visible && (
                <div className=" w-80 h-72 border-2 border-indigo-500"></div>
            )
            }

            <button className="fixed bg-blue-400 text-white py-3 px-4 cursor-pointer " onClick={() => setVisible(!visible)}>{visible ? "Hide" : "Show"}</button>
        </>
    )
}

export default Page;