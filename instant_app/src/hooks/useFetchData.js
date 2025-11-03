import React, { useEffect, useState } from 'react'


const useFetchData = (url) => {
    
    const[datas,setDatas]=useState([]);

    const urldata = async ()=>{
        const data = await fetch(url);
        const product_data = await data.json();
        setDatas(product_data)
    }
   
    useEffect(()=>{
        urldata()
    },[url])
return {datas}
}

export default useFetchData;