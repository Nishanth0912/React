import { useEffect, useState } from "react";

const User = ()=>{

    const [ennodauserdata,setEnnodaUserData]=useState([]);
    const[ennodasearchdata,setEnnodaSearchData]=useState("")
    const [loading, setLoading] = useState(true);
    
const getdata = async ()=>{

    const data = await fetch("https://dummyjson.com/users");

    const fetched_data = await data.json();

    setEnnodaUserData(fetched_data.users);
    setLoading(false);
    console.log(fetched_data.users);
}

useEffect(()=>{
    getdata();
},[])

const getsearch = (e)=>{
   setEnnodaSearchData(e.target.value)
}

const handleSearch = ()=>{
    if(!ennodasearchdata) return ennodauserdata;

    return ennodauserdata.filter((e)=> e.firstName.toLowerCase().trim().includes(ennodasearchdata.toLowerCase().trim()))
}

const stored = handleSearch();

const SkeletonCard = () => (
    <div className="bg-white rounded-xl shadow-lg w-72 p-6 text-center border border-gray-200">
        <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-300 animate-pulse"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded animate-pulse mb-2 w-1/4 mx-auto"></div>
        <div className="h-6 bg-gray-300 rounded animate-pulse mb-3 w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse mb-2 w-1/3 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse mb-2 w-full"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse w-1/4 mx-auto"></div>
    </div>
);

    return(
        <>
            <div className="flex flex-col justify-center items-center mb-8 p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Users</h1>
                <input 
                    type="text" 
                    placeholder="Search users..." 
                    className="border-2 border-gray-300 w-96 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 text-lg shadow-sm" 
                    onChange={getsearch} 
                />
            </div>
           <div className="bg-gray-100 min-h-screen p-8 flex flex-wrap justify-center gap-6">
            {loading ? (
                Array.from({ length: 12 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))
            ) : (
                stored.map((e)=>(
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 w-72 p-6 text-center border border-gray-200" key={e.id}>
                        <div className="flex justify-center mb-4">
                            <img src={e.image} alt={e.firstName} className="w-24 h-24 rounded-full object-cover border-4 border-blue-500" />
                        </div>
                        <h1 className="text-sm text-gray-500 mb-1">ID: {e.id}</h1>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{e.firstName} {e.lastName}</h2>
                        <h3 className="text-gray-600 mb-1">Age: {e.age}</h3>
                        <h3 className="text-blue-600 mb-2 truncate">{e.email}</h3>
                        <h3 className="text-purple-600 font-medium capitalize">{e.gender}</h3>
                    </div>
                ))
            )}
             </div>
        </>
    )
}

export default User;