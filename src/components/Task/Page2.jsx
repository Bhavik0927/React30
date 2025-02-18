// Create a list from an array using the .map() method.
 
const Page2 = () =>{
    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
    return (
        <>
            <div>
                {
                    items.map((data,index) => (
                        <li key={index}>{data}</li>
                    ))
                }
            </div>

            
        </>
    )
}

export default Page2;