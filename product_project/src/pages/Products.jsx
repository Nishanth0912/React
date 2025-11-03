import { useEffect, useState } from "react";

const Products = () => {

    const [ennodaproducts, setEnnodaProducts] = useState([]);
    const [searchdata, setSearchData] = useState("");
    const [loading, setLoading] = useState(true);
    const [ennodacategory,setEnnodaCategory]=useState([]);
    const[filcategory,setFilCategory]=useState("");
    const[ennodaprice,setEnnodaPrice]=useState([]);

  
    const filter_by_price=[{price:"Low to High"},{price:"High to Low"}]

    const product_details = async () => {
        const data = await fetch("https://dummyjson.com/products?limit=20");
        const fetched_data = await data.json();
        setEnnodaProducts(fetched_data.products);
        setLoading(false);
        const allcats = fetched_data.products.map((e)=> e.category);

        const unique_cats = Array.from(new Set(allcats));
        setEnnodaCategory(unique_cats)
        
    }
     
    useEffect(() => {
        product_details();
    }, [])

    const getsearch = (e) => {
        setSearchData(e.target.value);
    }
   

    const getcategory =(e)=>{
        setFilCategory(e.target.value);
    }
    
    const getprice = (e)=>{
          setEnnodaPrice(e.target.value)
    }


    const searchedvalue = () => {

         let filtervalues = ennodaproducts;

         if (filcategory !== "") {
            filtervalues=filtervalues.filter((e)=> e.category === filcategory);
         }
        if (searchdata !== "") 
        filtervalues=filtervalues.filter((e) => e.title.toLowerCase().includes(searchdata.toLowerCase().trim()));

        if (ennodaprice !=="") {
            if (ennodaprice === "Low to High") {
                filtervalues=filtervalues.sort((a,b)=> a.price - b.price);
            }else if (ennodaprice === "High to Low") {
                filtervalues=filtervalues.sort((a,b)=> b.price - a.price);
            } 
        }
         
        return filtervalues;
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
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Products</h1>
            <div className="flex flex justify-center items-center mb-8 p-6 gap-3">
                
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    className="border-2 border-gray-300 w-96 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 text-lg shadow-sm" 
                    onChange={getsearch} 
                />

                <select name="category" className="border-2 border-gray-300 w-96 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 text-lg shadow-sm" onChange={getcategory}>
                <option value="" selected disabled>All Products</option>
                    {
                      ennodacategory.map((e,i)=>(
                        <option value={e}  key={i+1}>{e.toUpperCase()}</option>
                      ))
                    }
                    
                </select>

                <select name="category" className="border-2 border-gray-300 w-96 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 text-lg shadow-sm" onChange={getprice}>
                <option value="" selected disabled>Filter by Price</option>
                  {
                    filter_by_price.map((e,i)=>(
                        <option key={i+1} value={e.price}>{e.price}</option>
                    ))
                  }
                    
                </select>
            </div>

            <div className="bg-gray-100 min-h-screen p-8 flex flex-wrap justify-center gap-8">
                {loading ? (
                    Array.from({ length: 8 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                ) : (
                    savesearch.map((e) => (
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 w-80 p-6 border border-gray-200" key={e.id}>
                            <div className="flex justify-center mb-4 relative">
                                <img src={e.images[0]} alt={e.title} className="w-48 h-48 object-cover rounded-lg" />
                                <h3 className="absolute left-1 bg-orange-300 p-2 rounded text-white font-bold ">{e.category.toUpperCase()}</h3>
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