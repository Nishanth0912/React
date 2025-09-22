import nishanth_logo from "../logo/nishanth_logo_2.png";


const Nav = () =>{
    const nav ={
        width:"100%",
        height:"80px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottom:"2px solid black"

    }

    const flex = {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        gap:"80px",
        listStyleType :"none"
    }
    const nav_items =['Home','About','Skills','Experience','Contact'];
    const social_buttons =[{name:'Linked in',className:'linkedin'},{name:'GitHub',className:'github'}];
    

    return (
           <nav className="header" style={nav}>
               <div className="logo">
                <img src={nishanth_logo} alt="logo" />
               </div>
               <div className="navbar">
                <ul className="nav-items" style={flex}>
                    {      nav_items.map((item,i)=>(
                            <li className="nav-links" key={i}><a href="#">{item}</a></li>
                        ))
                    }   
                </ul>
               </div>
               <div className="social-links">
                       {
                        social_buttons.map((item,index)=>(
                           <button className={item.className}>{item.name}</button>
                        ))
                       }
                       
               </div>
           </nav>
    );
}

export default Nav;
