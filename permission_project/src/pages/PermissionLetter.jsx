import { useEffect, useState } from "react";

const PermissionLetter = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const stored = localStorage.getItem("user");
        if (stored) {
            setData(JSON.parse(stored));
        }
    }, [])
    return (<>
        <p>{data.username}</p>
        <p>{data.city}</p>
        <p>{data.mobile}</p>
        <p>{data.email}</p>
        <p>{data.role}</p>
        <p>{data.reason}</p>


    </>)
}

export default PermissionLetter;