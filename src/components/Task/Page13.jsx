// Progress Bar

import { useEffect, useState } from "react"
import Progress from "../Pages/Progress";

const Page13 = () => {

    const [progress, setProgress] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setProgress((prev) => (prev < 100 ? prev + 10 : 100))
            },100)
        } else {
            clearInterval(interval);
        }

        return () => { clearInterval(interval) }

    }, [running]);

    return (
        <div className="w-1/2 mx-auto mt-10 p-5">
            <Progress progress={progress} />
            <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded"
                onClick={() => setRunning((prev) => !prev)}   >{running ? "Stop" : "Start"} progress</button>
        </div>
    )
}

export default Page13;