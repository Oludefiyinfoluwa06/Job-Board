import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../components/auth/Button'

const SigninPage = () => {
  return (
    <div className="container">
      <div className="container w-full h-lvh flex flex-row">
        <div className="description bg-blue-600 flex-1  w-full px-5 py-12 flex flex-col">
          <div className="navs">
          <nav className='text-2xl font-semibold text-slate-200 float-left pb-8'>
             <NavLink to="/">
               <span className="text-4xl font-sebold text-slate-200">J</span> Job Board
             </NavLink>
           </nav>
          </div>
           
           <main className="justify-center m py-12 px-12 ">
            <h2 className="font-bold text-3xl tracking-wide text-white capitalize py-8">Hey there!</h2>
            <p className="text-white font-semibold tracking-normal text-base">Welcome Back</p>
            <p className="text-white font-semibold tracking-normal text-base">You are just one step away to your feed</p>
           </main>
           <div className="descends">
            <p className=" text-blue-400 py-4 font-semibold tracking-normal text-base">Don't have an account?</p>
            <div className="conts">
              <Button text='Sign in' />
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