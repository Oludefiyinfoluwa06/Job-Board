import React from 'react'
import { Link } from 'react-router-dom'
import "./btn1.css"

const Btn1SignUp = () => {
  return (
    <div className="btn">
        <button className="btn1 py-2 px-12 text-center"  id="signup">
            <Link to="SignUp">
                Sign Up
            </Link>
        </button>
    </div>
  )
}

export default Btn1SignUp