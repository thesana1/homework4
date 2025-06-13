import React, { useState } from 'react'

export default function Card() {
    const [showTitle, setShowTitle] = useState(true)
  return (
 <div className="box card-box">
      {showTitle && <h3 className="card-title">lamazi dzagli</h3>}
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYsTCZAfCg8v3AWG5JJy68Nge5gIUdaQNl7bZ81RHjOKEqQ2sDGVpCYrAj-aFvjJdMor8MlmPYDXYwwsAvfKa6gw"
        alt="card"
        className="card-img"
      />
      <p>A dog</p>
      <button className="btn" onClick={() => setShowTitle(!showTitle)}>
        Toggle Title
      </button>
    </div>
  )
}
