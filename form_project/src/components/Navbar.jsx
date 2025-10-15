import {Link} from 'react-router-dom'

const Navbar = ()=>{

    const users = [
        {
          username: "Arun Kumar",
          city: "Chennai",
          number: "9876543210",
          useremail: "arun.kumar@example.com",
          role: "TL",
          reason: "Need to leave early for a family function."
        },
        {
          username: "Priya Sharma",
          city: "Coimbatore",
          number: "9123456780",
          useremail: "priya.sharma@example.com",
          role: "Manager",
          reason: "Medical appointment scheduled during working hours."
        },
        {
          username: "Ravi Raj",
          city: "Madurai",
          number: "9988776655",
          useremail: "ravi.raj@example.com",
          role: "GM",
          reason: "Traveling to attend an official conference."
        },
        {
          username: "Meena Devi",
          city: "Trichy",
          number: "9090909090",
          useremail: "meena.devi@example.com",
          role: "TL",
          reason: "Attending a family ceremony out of town."
        },
        {
          username: "Suresh Babu",
          city: "Salem",
          number: "9500505050",
          useremail: "suresh.babu@example.com",
          role: "Manager",
          reason: "Personal work at home, requesting half-day leave."
        }
      ];

    return(<>
        <div className='flex justify-center items-center gap-4'>
            
            <Link to="/" className='border-b-2 text-2xl'>Form </Link>
       
            <Link to="/contact" className='border-b-2 text-2xl' >Contact</Link>

            <Link to="/permissionform" className='border-b-2 text-2xl'>Permission Form</Link>

            <Link to="/permissionletter" className='border-b-2 text-2xl'>Permission Letter</Link>
        </div>
    </>)
}

export default Navbar;
