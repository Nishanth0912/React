import { useEffect, useState } from "react";

const User = () => {
    const [userData, setUserData] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [loading, setLoading] = useState(true);
    const [genderdata,setGenderData]=useState("");
    const [filtergender,setFilterGender]=useState([]);

    const getdata = async () => {
        try {
            // Simulate loading delay for better skeleton effect
            await new Promise(resolve => setTimeout(resolve, 1000));
            const data = await fetch("https://dummyjson.com/users");
            const fetched_data = await data.json();
            setUserData(fetched_data.users);
            const all_gender = fetched_data.users.map((e)=> e.gender);
            const unique_gender = Array.from(new Set(all_gender));
            setFilterGender(unique_gender);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }
    // console.log(filtergender);

    useEffect(() => {
        getdata();
    }, []);

    const getsearch = (e) => {
        setSearchData(e.target.value);
    }

    const getChange =(e)=>{
        setGenderData(e.target.value)
    }

    const handleSearch = () => {

       let filtervalues = userData;

       if (genderdata !=="") 
       {
        filtervalues=filtervalues.filter((e)=> e.gender === genderdata);
       }
        
       
        if (searchData !== "") 
        {
            filtervalues= filtervalues.filter((e)=> e.firstName.toLowerCase().trim().includes(searchData.toLowerCase().trim()));
        }


        return filtervalues;
    }



    const stored = handleSearch();

    // Table Skeleton Component
    const TableSkeleton = () => (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                    <tr>
                        {[...Array(8)].map((_, index) => (
                            <th key={index} className="px-6 py-4 border-b border-gray-200">
                                <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4 mx-auto"></div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[...Array(6)].map((_, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-gray-200">
                            {[...Array(8)].map((_, cellIndex) => (
                                <td key={cellIndex} className="px-6 py-4">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        User Management
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Browse and search through our user directory with ease
                    </p>
                    
                    {/* Search Bar */}
                    <div className="relative flex justify-center items-center  gap-2 max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search users by first name..." 
                            className="block w-full pl-10 pr-4 py-4 border border-gray-300 rounded-2xl bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-all duration-200"
                            onChange={getsearch} 
                        />
                        <select name="gender" 
                        className="block w-full pl-10 pr-4 py-4 border border-gray-300 rounded-2xl bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-all duration-200"
                        onChange={getChange}>
                            <option value="">Filter by Gender</option>
                             {
                                filtergender.map((e,i)=>(
                                    <option value={e} key={i+1}>{e}</option>
                                ))
                             }
                        </select>
                    </div>

                    {/* Results Count */}
                    {!loading && (
                        <div className="mt-4 text-sm text-gray-500">
                            Showing {stored.length} of {userData.length} users
                        </div>
                    )}
                </div>

                {/* Table Section */}
                {loading ? (
                    <TableSkeleton />
                ) : (
                    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                                    <tr>
                                        <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            First Name
                                        </th>
                                        <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Last Name
                                        </th>
                                        <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Age
                                        </th>
                                        <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Gender
                                        </th>
                                        <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Phone
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {stored.length === 0 ? (
                                        <tr>
                                            <td colSpan="8" className="px-8 py-12 text-center">
                                                <div className="flex flex-col items-center justify-center">
                                                    <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <p className="text-lg text-gray-500 font-medium">No users found</p>
                                                    <p className="text-sm text-gray-400 mt-1">Try adjusting your search terms</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        stored.map((user) => (
                                            <tr 
                                                key={user.id} 
                                                className="hover:bg-blue-50 transition-all duration-200 cursor-pointer group"
                                            >
                                                <td className="px-8 py-4 whitespace-nowrap">
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                        #{user.id}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                    {user.firstName}
                                                </td>
                                                <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {user.lastName}
                                                </td>
                                                <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        {user.age}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                        user.gender === 'male' 
                                                            ? 'bg-blue-100 text-blue-800' 
                                                            : 'bg-pink-100 text-pink-800'
                                                    }`}>
                                                        {user.gender}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                        {user.role || 'User'}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <a 
                                                        href={`mailto:${user.email}`} 
                                                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                                                    >
                                                        {user.email}
                                                    </a>
                                                </td>
                                                <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                                                    {user.phone}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default User;