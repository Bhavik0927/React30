import { useState } from "react";
import ExpensiveCalc from "../UseMemo/ExpensiveCalc";

const Page16 = () => {
    let [count, setCount] = useState(0);

    return (
        <div className="p-4 h-lvh flex items-center justify-center flex-col">
            <ExpensiveCalc />
            <button className="py-3 px-6 bg-amber-500 text-black font-bold rounded-md cursor-pointer " onClick={() => setCount(count + 1)}>Re-renderd component</button>
            <h2>{count}</h2>
        </div>
    )
}

export default Page16