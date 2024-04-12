import React from 'react'
import Btn1SignUp from '../components/ButtonSignUp'
import { NavLink } from 'react-router-dom'

const SigninPage = () => {
  return (
    <div className="container">
      <div className="container w-full h-lvh flex ">
        <div className="description bg-blue-600 flex-1  w-full px-5 py-12">
          <div className="navs">
          <nav className='text-2xl font-semibold text-slate-200 float-left pb-8'>
             <NavLink to="/SignUp">
               <span className="text-4xl font-sebold text-slate-200">J</span> Job Board
             </NavLink>
           </nav>
          </div>
           
           <main className="justify-center m py-12 px-12 ">
            <h2>Hey there!</h2>
            <p>you are just one step away to your feed</p>
           </main>
           <div className="descends">
            <p>Don't have an account?</p>
            <div className="conts">
              <Btn1SignUp/>
          </div>

           </div>
        </div>
        <div className="signinform bg-white flex-1 w-full">
          <div className="conts">
            
          </div>

        </div>
      </div>
        
    </div>
  )
}

export default SigninPage