import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { hobbies } from '../data/hobbies'

const HobbyDetail = () => {
  const { id } = useParams();
  const hobby = hobbies.find(h => h.id === id);

  if (!hobby) {
    return (
      <div className="page">
        <div className="stack">
          <h1>Hobby not found</h1>
          <Link to="/hobbies" className="btn">Back to Hobbies</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="stack">
        <img src={hobby.img} alt={hobby.title} style={{ maxWidth: "640px", width: "100%", borderRadius: "16px" }} />
        <h1>{hobby.title}</h1>
        <p>{hobby.details}</p>
        <Link to="/hobbies" className="btn">← Back to Hobbies</Link>
      </div>
    </div>
  )
}

export default HobbyDetail
