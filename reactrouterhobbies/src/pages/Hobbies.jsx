import React from 'react'
import { Link } from 'react-router-dom'
import { hobbies } from '../data/hobbies'

const Hobbies = () => {
  return (
    <div className="page">
      <div className="stack">
        <h1>Hobbies</h1>
        <p>Select a hobby to learn more.</p>
        <div className="grid">
          {hobbies.map(h => (
            <div key={h.id} className="card">
              <img src={h.img} alt={h.title} />
              <h3>{h.title}</h3>
              <p>{h.blurb}</p>
              <Link to={`/hobbies/${h.id}`} className="btn">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hobbies
