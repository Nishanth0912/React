import {useState, useEffect } from "react";

const Components =()=>{
   
    const [products,setProducts]=useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProduct = async ()=>{
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products?limit=10");
        const data = await res.json();
        console.log(data);
        setProducts(data.products);
        setLoading(false);
    }

    useEffect(()=>{
        fetchProduct();
    },[]);

    // Skeleton Loader Component
    const SkeletonLoader = () => (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-6 max-w-7xl mx-auto">
            {[...Array(5)].map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="relative overflow-hidden bg-gray-200 h-48 animate-pulse">
                        <div className="w-full h-full bg-gray-300"></div>
                    </div>
                    <div className="p-4">
                        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mb-4"></div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="h-6 bg-gray-200 rounded animate-pulse w-20"></div>
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                        </div>
                        <div className="h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                    </div>
                </div>
            ))}
        </section>
    );

   
    return (
        <>
           {loading ? (
               <SkeletonLoader />
           ) : (
               <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-6 max-w-7xl mx-auto">
                {products.map((product,index)=>(
                  <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                    <div className="relative overflow-hidden bg-gray-100 h-48">
                        <img 
                          src={product.images && product.images[0]} 
                          alt={product.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold">
                            {Math.round(product.rating)} ⭐
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2 h-12">{product.title}</h3>
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-2xl font-bold text-gray-900">₹{Math.round(product.price)}</p>
                            <p className="text-sm text-gray-500 line-through">₹{Math.round(product.price * 1.2)}</p>
                        </div>
                        <button className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-3 px-4 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-200 active:scale-95">
                            Add to Cart
                        </button>
                    </div>
                  </div>
                ))}
               </section>
           )}
        </>
    )
}

export default Components;