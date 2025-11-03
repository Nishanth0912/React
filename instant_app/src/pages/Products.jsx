import React from 'react'
import  useFetchData  from '../hooks/useFetchData'

const Products = () => {

    const {datas}= useFetchData("https://fakestoreapi.com/products")
  return (
    <>
     <div>
        {
            datas.map((e,i)=>(
                <div key={i}>
                <h1>{e.title}</h1>
                <img src={e.image} />
                </div>
            ))
        }
     </div>
    </>
   
  )
}

export default Products