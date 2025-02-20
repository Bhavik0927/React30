import { useState, useEffect } from "react"
import Card from "./Card";

const Page6 = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=12&_page=${page}`);

        const data = await res.json();

        setData(prev => [...prev, ...data]);
    }

    const handleInfiniteScrollEvent = () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setPage(prev => prev + 1);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => { fetchData() }, [page]);

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScrollEvent);

        return () => window.removeEventListener('scroll', handleInfiniteScrollEvent);
    }, [])

    return (
        <>
            <h1 className="font-bold text-2xl text-center">Infinite Scroll</h1>
            <div className="flex flex-wrap justify-center">
                {
                    data.map((item) => <Card key={item.id} data={item} />)
                }
            </div>
        </>
    )
}

export default Page6