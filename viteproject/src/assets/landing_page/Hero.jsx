import banner from "../banner/banner.png"
const Hero =()=>{
   const hero_header="Hi..I'm Nishanth";
   const hero_content="Aspiring Software Developer with expertise in Java, SQL, and Frontend Development. Passionate about designing efficient, scalable applications and improving user experiences.Seeking a challenging role in software development to build impactful solutions."

   return (
    <div className="banner">
         <div className="banner-image">
           <img src={banner} className="banner_image" alt="banner" /> 
         </div>
         <div className="banner-content">
            <h1>{hero_header}</h1>
            <p>{hero_content}</p>
               <input type="text" name="msg" id="msg" placeholder="Send a message" size={25} />
               <input type="button" value="Send"  />
         </div>
    </div>
   )
}

export default Hero;

