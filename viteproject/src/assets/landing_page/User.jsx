

const User = ()=>{
//     const obj= {name:'Sudhan', age:22, course:'MERN'};
//     const {name,age,course}=obj;

//     const {id,p_name,price}={id:101, p_name:'Laptop', price:50000};

//    const fruits=['Apple','Banana','Mango'];

//    const students=[{sid:1,sname:'Arun'},{sid:2,sname:'Priya'}];

//    const [{sid : sid1,sname : sname1},{sid : sid2,sname : sname2}]=students;

//    const  isAdmin=true;
//    const result= isAdmin?<h1>Welcome Admin</h1>:<h1>Welcome User</h1>;

//    const marks=35;
//    const result_portal= marks?"Pass":"Fail";

//    const cartItems="three";
//    const cart_result = cartItems.length>0?"You have X items":"";

//    const notifications ="four";
//    const notify_result=notifications.length>0?notifications.length:"";

//    const user1={name1:'Priya', age1:21};
//    const {name1,age1}=user1;
  
//    const arr1 =[1,2]
//    const arr2 =[3,4]
//    const merge_arr = [...arr1,...arr2];

//    const obj1 ={a:1}
//    const obj2={b:2}
//    const merge_obj ={...obj1,...obj2};


//    let arr3= [1,2,3,4]

// const numbers = [10,20,60,80];
// let greater=numbers.filter((e)=>(e>50));

// const total =  [5,10,15,20];
// let total_result = total.reduce((acc,e)=>(
//     acc+e
// ))


// const marks=[75,80,95,99,85];
// let marks_result = marks.find((marks)=> marks>80);

// const obj4 ={product:"laptop",costs:50000};

// const obj5=`product ${obj4.product} costs ${obj4.costs}`;


const employee=true;

     return(
        <>
          {/* <h1>User Component:</h1>
          <h1>Name : {name}</h1>
          <h1>Age : {age}</h1>
          <h1>Course : {course}</h1>
          <br/>


          <h1>Product :</h1>
          <table border={1} cellPadding={2} cellSpacing={1}>
            <tr>
                <th>Id </th>
                <th>Name </th>
                <th>Price </th>
            </tr>
            <tr>
                <td>{id}</td>
                <td>{p_name}</td>
                <td>{price}</td>
            </tr>
          </table>
         <br />


         <h1>Fruits :</h1>
         <ul>
            {
                fruits.map((e)=>(
                    <li>{e}</li>
                ))
            }
         </ul>
         <br />

        <h1>Students :</h1>
         {students.map((e)=>(
            <h1>{e.sname}</h1>
         ))}
        <br />

         <h1>Conditional Rendering</h1>
         <h1>{result}</h1>

         <br />

        <h1>{result_portal}</h1>

        <h1>{cart_result}</h1>

        <p>Count : {notify_result}</p>

        <br />
        <h1>User Name: {name1}</h1>
        <h1>User Age : {age1}</h1>


        <br />

        <h1>{merge_arr}</h1>

        <h1>{merge_obj}</h1> */}

        {/* <br /> */}
         
         
            {/* <h1>Doubled Numbers :</h1>
            {
               arr3.map((e,i)=>(  

                <h2 key={i}>{e*2}</h2>
               ))
            } */}
        
            {/* <h1>Greater than 50: </h1>
            {
                greater.map((e)=>(
                    <h2>{e}</h2>
                ))
            } */}

            {/* <br />
           

           <h1>Sum of all numbers :{total_result}</h1> */}

           {/* <br /> */}

           {/* <h1>Marks Greater than 80 : {marks_result}</h1> */}

           {/* <br />

           <h1>{obj5}</h1> */}

           {/* <h1>{obj1.a}</h1> */}

           <p>{employee ?"employee: yes congratulations":"try hard"}</p>

        </>

        
     )
}

export default User;