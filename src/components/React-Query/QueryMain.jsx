import { useQuery } from "@tanstack/react-query"
import { fetchUser } from "./Api"

const QueryMain = () => {
    const {data,isLoading,error} = useQuery({
        queryKey: ['users'],
        queryFn: fetchUser
    })

    if(isLoading) return <p>⌛ Loading ho rha hai </p>
    if(error) return <p>❌ Error ho gaya hai </p>
    
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>🚀 React Query Demo</h1>
            <ul>
                data && {
                    data?.map((user) => {
                        return (
                            <li key={user.id} className="border-2 border-black m-2 p-2 rounded-md">
                                <h1 className="font-bold">{user.name}</h1>
                                <p>{user.email}</p>
                                <p>{user.body}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default QueryMain;