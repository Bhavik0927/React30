import { useState } from "react";

const Users = Array.from({length:1000}, (_, i) => `User => ${i + 1}`);

const Page17 = () => {
    const [search, setSearch] = useState("");

    const filterUser = Users.filter(user =>{
        return user.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <div className="p-4 h-lvh flex items-center justify-center flex-col">
            <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)} />

            <ul>
                {
                    filterUser.slice(0,10).map((user,index) =>(
                        <li key={index}>{user}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Page17