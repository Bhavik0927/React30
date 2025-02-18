const Page3 = () => {
    const data = [
        { serialNumber: '1', name: 'Food', canAdd: true, batchNumber: null, price: null },
        { serialNumber: '1.1', name: 'Fruit', canAdd: true, batchNumber: null, price: null },
        { serialNumber: '1.1.1', name: 'Apple', canAdd: true, batchNumber: null, price: null },
        { serialNumber: '1.1.1.1', name: 'Apple Sauce', canAdd: false, batchNumber: 1001, price: 2 },
        { serialNumber: '1.2', name: 'Vegetables', canAdd: true, batchNumber: null, price: null },
        { serialNumber: '1.2.1', name: 'Potato', canAdd: false, batchNumber: 11, price: 3 },
      ]
    return (
        <>
            <table>
                <thead>
                    <tr className="bg-gray-400">
                        <th className="border-gray-500 px-4 py-2">serialNumber</th>
                        <th className="border-gray-500 px-4 py-2">name</th>
                        <th className="border-gray-500 px-4 py-2">canAdd</th>
                        <th className="border-gray-500 px-4 py-2">batchNumber</th>
                        <th className="border-gray-500 px-4 py-2">price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index) => (
                            <tr key={index} className="border-gray-500 text-center">

                                <td className="border border-gray-500 px-4 py-2">{item.serialNumber}</td>

                                <td className="border border-gray-500 px-4 py-2">{item.name}</td>

                                <td className="border border-gray-500 px-4 py-2">{item.canAdd ? "Yes" : "No"  }</td>

                                <td className="border border-gray-500 px-4 py-2">{item.batchNumber !== null ? item.batchNumber : "N/A"}</td>

                                <td className="border border-gray-500 px-4 py-2">{item.price !== null ? `$${item.price}` : "N/A"}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Page3;