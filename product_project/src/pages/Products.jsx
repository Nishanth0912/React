import { useEffect, useState } from "react";

const Products = () => {

    const [ennodaproducts, setEnnodaProducts] = useState([]);
    const [searchdata, setSearchData] = useState("");
    const [loading, setLoading] = useState(true);

    const product_details = async () => {
        const data = await fetch("https://dummyjson.com/products?limit=20");
        const fetched_data = await data.json();
        setEnnodaProducts(fetched_data.products);
        setLoading(false);
    }

    useEffect(() => {
        product_details();
    }, [])

    const getsearch = (e) => {
        setSearchData(e.target.value);
    }

    const searchedvalue = () => {
        if (searchdata === "") return ennodaproducts;
        return ennodaproducts.filter((e) => e.title.toLowerCase().includes(searchdata.toLowerCase().trim()));
    }

    const savesearch = searchedvalue();

    const SkeletonCard = () => (
        <div className="bg-white rounded-xl shadow-lg w-80 p-6 border border-gray-200">
            <div className="flex justify-center mb-4">
                <div className="w-48 h-48 bg-gray-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center">
                <div className="h-5 bg-gray-300 rounded animate-pulse mb-3 w-4/5 mx-auto"></div>
                <div className="h-6 bg-gray-300 rounded animate-pulse mb-4 w-1/3 mx-auto"></div>
                <div className="h-12 bg-gray-300 rounded-lg animate-pulse w-full"></div>
            </div>
        </div>
    );

    return (
        <>
            <div className="flex flex-col justify-center items-center mb-8 p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Products</h1>
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    className="border-2 border-gray-300 w-96 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 text-lg shadow-sm" 
                    onChange={getsearch} 
                />
            </div>

            <div className="bg-gray-100 min-h-screen p-8 flex flex-wrap justify-center gap-8">
                {loading ? (
                    Array.from({ length: 8 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                ) : (
                    savesearch.map((e) => (
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 w-80 p-6 border border-gray-200" key={e.id}>
                            <div className="flex justify-center mb-4">
                                <img src={e.images[0]} alt={e.title} className="w-48 h-48 object-cover rounded-lg" />
                            </div>
                            <div className="text-center">
                                <h1 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{e.title}</h1>
                                <h2 className="text-2xl font-bold text-green-600 mb-4">${e.price}</h2>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 w-full">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default Products;