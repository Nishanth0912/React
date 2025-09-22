const Footer = ()=>{
  const menu_item=['Home','About','Skills','Experience','Contact'];
  const copyright="&copy; 2025 Nishanth. All Rights Reserved.";
    return(
        <>
       <div className="footer_section">
         <ul className="footer_menu">
            {
            menu_item.map((content,index)=>(
              <li key={index} className="menu_item">{content}</li>
            ))}
         </ul>
         <div className="copyright">
       <p>{copyright}</p>
       </div>
       </div>
       
       </>



    )
}

export default Footer