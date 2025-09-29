import ipl from '../assets/cards/kohliipl.jpg'
import t20 from '../assets/cards/kohlit20.jpg'
import odi from '../assets/cards/kohliodi.jpg'

const Course = () => {
  const courses = [
    {
      image : ipl,
      name  : "IPL",
      content : "RCB"
    },
    {
      image : odi,
      name  : "ODI",
      content : "Team India"
    },
    {
      image : t20,
      name  : "T20",
      content : "Team India"
    }
  ]

  return (
    <section className="my-20 flex justify-around items-center">
      {courses.map((e, i) => (
        <div key={i} className="card border-2 w-60">
          <div className="card-image border-2">
            <img src={e.image} alt={e.name} className="h-50 w-50" />
          </div>
          <div className="card-content text-center bg-black text-white">
            <h1>{e.name}</h1>
            <p>{e.content}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Course
