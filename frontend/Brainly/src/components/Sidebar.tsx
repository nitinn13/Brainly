import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <h1>Sidebar</h1>
      <Link to="/globalposts">Global</Link>
      <Link to="/myposts">My Posts</Link>
      

    </div>
  )
}

export default Sidebar