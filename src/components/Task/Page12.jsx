import { useState } from "react";
import { useEffect } from "react";

const Page12 = () => {

    const fetchData = async () => {
        try {
            const [userResponse, postResponse] = await Promise.all([
                fetch('https://jsonplaceholder.typicode.com/users'),
                fetch('https://jsonplaceholder.typicode.com/posts')
            ]);

            const userData = await userResponse.json();
            const postData = await postResponse.json();

            return { userData, postData };
        } catch (error) {
            console.log(error)
        }
    }

    const [data, setData] = useState({ user: [], post: [] })
    useEffect(() => {
        fetchData().then(setData)
    }, [])

    return (
        <div className="flex m-4">
            <div>
                <h1>UserData is Here:</h1>
                {
                    data?.userData?.map((user) => (
                        <p key={user.id}>{user?.name} </p>
                    ))
                }
            </div>
            <div>
                <h1>PostData is Here:</h1>
                {
                    data?.postData?.map((user) => (
                        <p key={user.id}>{user?.title} </p>
                    ))
                }
            </div>
        </div>
    )
}

export default Page12