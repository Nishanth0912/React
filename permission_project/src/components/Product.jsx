import { useEffect, useState } from "react";

const Product = () => {
    const [ennodaproducts, setEnnodaProducts] = useState([]);
    const [searchpannuradata, setSearchPannuradata] = useState("");

    const fetchProduct = async () => {
        const res = await fetch("https://dummyjson.com/products?limit=10");
        const data = await res.json();
        setEnnodaProducts(data.products);
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const handlesearch = (e) => {
        setSearchPannuradata(e.target.value);
    };

    const searchdatas = () => {
        if (searchpannuradata === "") return ennodaproducts;
        return ennodaproducts.filter((e) =>
            e.title.toLowerCase().includes(searchpannuradata.toLowerCase())
        );
    };

    const inthansearchdatas = searchdatas();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                        Premium Collection
                    </h1>
                    <p className="text-gray-300 text-xl">
                        Curated products for the modern lifestyle
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-lg mx-auto mb-16">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-30"></div>
                        <input
                            type="text"
                            placeholder="Search products..."
                            onChange={handlesearch}
                            className="relative w-full px-6 py-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none text-white text-lg placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {inthansearchdatas.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden rounded-t-3xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 z-10"></div>
                                <img
                                    src={product.images?.[0] || "/api/placeholder/300/200"}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Discount Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                        {Math.round((product.discountPercentage || 0))}% OFF
                                    </span>
                                </div>
                                
                                {/* Quick Action */}
                                <button className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                                    ♡
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-white font-semibold text-lg line-clamp-1 flex-1 mr-2">
                                        {product.title}
                                    </h3>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-cyan-400 font-bold text-xl">
                                            ${product.price}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Rating & Stock */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex text-amber-400">
                                            {"★".repeat(Math.floor(product.rating || 0))}
                                            <span className="text-gray-600">
                                                {"★".repeat(5 - Math.floor(product.rating || 0))}
                                            </span>
                                        </div>
                                        <span className="text-gray-400 text-sm">
                                            ({product.rating})
                                        </span>
                                    </div>
                                    <span className="text-green-400 text-sm font-medium">
                                        In Stock
                                    </span>
                                </div>

                                {/* Action Button */}
                                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-cyan-500/25">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {inthansearchdatas.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 mx-auto mb-6 bg-slate-800/50 rounded-3xl flex items-center justify-center">
                            <span className="text-4xl">🔍</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            No products found
                        </h3>
                        <p className="text-gray-400">
                            Try searching with different keywords
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Product;