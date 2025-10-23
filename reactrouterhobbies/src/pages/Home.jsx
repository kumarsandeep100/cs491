import React from 'react'

const Home = () => {
  return (
    <div className="page">
      <div className="stack">
        <h1>Welcome Home</h1>
        <p>Hi, I am Sandeep. This is my React Router practice project.</p>
        <img
          src="https://picsum.photos/seed/welcome/800/400"
          alt="Welcome from Picsum"
          style={{ maxWidth: "800px", width: "100%", borderRadius: "16px" }}
        />
      </div>
    </div>
  )
}

export default Home
