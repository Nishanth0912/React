import { useEffect, useState } from "react";

const PermissionLetter = ()=>{

    const [data, setData] = useState({});

    useEffect(()=>{
        const stored =localStorage.getItem("user")
        if(stored){
            setData(JSON.parse(stored))
        }
    },[])

    return(
        <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Permission Letter</h1>
          <p>Dear {data.role},</p>
          <p>
            I, <strong>{data.username}</strong> from <strong>{data.city}</strong>,
            request permission for the following reason:
          </p>
          <p className="italic">"{data.reason}"</p>
          <p>You can reach me at: {data.number} | {data.useremail}</p>
          <p>Thank you.</p>
        </div>
      );
}

export default PermissionLetter;