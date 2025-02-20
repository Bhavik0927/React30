// Create a dynamic search filter for a list of items.

import { useState } from "react";

const Page5 = () => {
    const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew",
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filterItem = items.filter((item) => {
        return item.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <div className="max-w-md mx-auto p-4">
                <input type="text"
                    placeholder="Search..."
                    className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <ul className="mt-4 border rounded-md p-2 shadow-sm">
                    {
                        filterItem.length > 0 ? (
                            filterItem.map((item, index) => (
                                <li key={index} className="p-2 border-b last:border-b-0">
                                    {item}
                                </li>
                            ))
                        ) : (
                            <h2>No items are found...</h2>
                        )
                        
                    }
                </ul>

            </div>
        </>
    )
}

export default Page5;