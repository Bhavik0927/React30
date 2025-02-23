import { useState } from "react"

const Page10 = () => {
    const [isLogged, setIsLogged] = useState(false);

    const toggleLoggedIn = () => {
        setIsLogged((prevState) => !prevState);
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">
                {
                    isLogged ? "Welcome User" : "Please Login Baby...!!"
                }
            </h1>
            {
                isLogged && <h2>You are Logged in..!!🚀</h2>
            }
            <button onClick={toggleLoggedIn}>
                {isLogged ? "Logout" : "Login"}
            </button>
        </div>
    )
}

export default Page10