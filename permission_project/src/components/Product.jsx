import { useEffect, useState } from "react";

const Product = ()=>{

const [ennodaproducts,setEnnodaProducts] = useState([])
const [searchpannuradata,setSearchPannuradata] = useState("")


    const fetchProduct = async()=>{

        const res = await fetch("https://dummyjson.com/products?limit=10");
        const data = await res.json();

        console.log(data);
        setEnnodaProducts(data.products)

    }

    useEffect(()=>{
        fetchProduct();
    },[])


    const handlesearch = (e)=>{
    
        setSearchPannuradata(e.target.value)

        //console.log(productsearch);
      

    }

    const searchdatas = ()=>{
        if(searchpannuradata==="") return  ennodaproducts

        return ennodaproducts.filter((e)=> e.title.toLowerCase().includes(searchpannuradata.toLowerCase()))

    }

    const inthansearchdatas = searchdatas()
    


    return <>
    
    <div className="bg-blue-500 h-500">
        <h1 className="text-center p-10 text-2xl">Product List</h1>
       
       <div className="text-center mb-10">
       <input type="text" placeholder="Search" onChange={handlesearch} className="p-2 bg-white w-100 text-2xl rounded-2xl" />
       </div>
        
        <div className="flex flex-wrap gap-10 justify-center">

            {inthansearchdatas.map((e)=>(
             
             <div className="bg-white w-60 h-100 rounded p-6" key={e.id}>
                
                <img src={e.images} alt="" />
             <h1>{e.title.length>10?e.title.slice(0,10)+"...":e.title}</h1>
             {e.description.length > 20 ? e.description.slice(0, 30) + "..." : e.description}
             <p className="bg-blue-500 w-20 text-center p-1 m-1 rounded text-white">{e.price}</p>
             <button className="bg-black text-white p-2 w-50 rounded hover:bg-blue-500 hover:text-black">Add to cart</button>
           </div>


            ))}



           
        </div>
    </div>
    
    </>

}

export default Product;