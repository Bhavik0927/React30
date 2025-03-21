import { useMemo } from "react"


const ExpensiveCalc = () => {

    const sum = () => {
        console.log('sum called');
        let sum = 0
        for (let i = 0; i < 100; i++) {
            sum += 1;
        }
        return sum;
    }

    const result = useMemo(() => sum(),[]);
    
    return (
        <>
            
            <h2>ExpensiveCalc</h2>
            <h3>Result: {result}</h3>
        </>
    )
}

export default ExpensiveCalc;