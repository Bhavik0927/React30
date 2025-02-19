import { useState } from "react";
import { useEffect } from "react";

const Page4 = () => {

    const Page_Size = 5;

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products');
        const res = await data.json();
        console.log(res.products);
        setProducts(res.products);
    }

    useEffect(() => { fetchData() }, []);

    const totalProducts = products.length;
    const totalNoOfPages = Math.ceil(totalProducts / Page_Size);
    const start = currentPage * Page_Size;
    const end = start + Page_Size;

    const handlePageChange = (page) => { setCurrentPage(page) };
    const goToPrevPage = () => { setCurrentPage(prev => prev - 1) };
    const goToNextPage = () => { setCurrentPage(prev => prev + 1) };

    return !products.length ? (<h1>No Product found..!!</h1>) :
        <div>
            <h1 >Pagination</h1>

            <div>
                <button className="cursor-pointer" disabled={currentPage == 0} onClick={() => goToPrevPage()}>⬅️</button>

                {
                    [...Array(totalNoOfPages).keys()].map((n) => <button className={"p-1 px-2 border-1  text-black rounded-full m-3 cursor-pointer " + (n === currentPage ? "bg-amber-400" : "")} onClick={() => handlePageChange(n)} key={n}>{n}</button>)
                }

                <button className="cursor-pointer" disabled={currentPage == totalNoOfPages - 1} onClick={() => goToNextPage()}>➡️</button>
            </div>

            <div className=" flex flex-wrap  justify-center">
                {
                    products.slice(start, end).map((prod) => {
                        return (
                            <div key={prod.id} className="card bg-base-100 w-72 shadow-sm m-3">
                                <figure>
                                    <img
                                        src={prod.thumbnail}
                                        alt={prod.brand} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{prod.title}</h2>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

}

export default Page4;