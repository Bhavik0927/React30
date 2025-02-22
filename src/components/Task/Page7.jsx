import { useState } from "react";

const Page7 = () => {
    const [columns, setColumns] = useState({
        column1: ['item1', 'item2'],
        column2: ['item3', 'item4']
    });

    const onDragStart = (event, item, col) => {
        event.dataTransfer.setData('item',item);
        event.dataTransfer.setData('col',col);
    }

    const onDrop = (e,toColumn) =>{
        e.preventDefault();
        const item = e.dataTransfer.getData('item',item);
        const fromColumn = e.dataTransfer.getData('col',fromColumn);
        
        if(toColumn === fromColumn) return;

        setColumns((prev) =>{
            const fromData = prev[fromColumn].filter((older) => older !== item);
            const toData = [...prev[toColumn,item]]
            return {
                ...prev,
                [fromColumn] : fromData,
                [toColumn] : toData
            }
        })
        
    }
    return (
        <div className="flex justify-center p-4 ">
            {
                Object.keys(columns).map((col, ind) => (
                    <div className="p-2.5 border-2 border-solid w-72 h-80 m-4" key={ind} onDrop={(e) =>onDrop(e,col)} onDragOver={(e)=> e.preventDefault()}>
                        {
                            columns[col].map((item, indx) => (
                                <div draggable onDragStart={(event) => onDragStart(event,item,col)} key={indx} className="border-2 border-solid p-2.5 m-2 rounded-3xl">
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Page7