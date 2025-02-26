
const Progress = ({ progress }) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div className="bg-blue-500 h-5 pl-4 text-center " style={{ width: `${progress}%` }}>
                {progress}%
            </div>
        </div>
    )
}

export default Progress;