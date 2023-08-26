import { useState } from "react";

import { useDispatch } from 'react-redux';

import { signup, login } from "./action/auth.js"

import { NavLink, useNavigate } from 'react-router-dom'

const Registration = () => {
    const [email, setEmail] = useState("");
    const [name, setName]= useState("")
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(true);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  

const handleToggle=()=>{
     setRegister(!register);
     setName("");
     setEmail("");
     setPassword("");
}
const handleForm=(e)=>{
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
    }
    if (register) {
      if (!name) {
        alert("Enter a name to continue");
      }
      dispatch(signup({ name, email, password }, setError, navigate));
    } else {
      dispatch(login({ email, password }, setError, navigate));
    }
  };


    return (
        <div className="flex items-center justify-center bg-indigo-950 h-screen w-full  p-4 transition  duration-300 ease-in-out">
            <div className="flex flex-col items-center p-2 w-full md:w-auto">
 
                <p className="text-2xl font-bold mb-14
                  text-white transition  duration-600">{register === false ? 'Login to your account' : 'Create a account'} </p>
                <form className="w-full flex gap-6  flex-col"  onSubmit={handleForm}>
                    { register &&  <label htmlFor=""  className="transition  duration-400 ease-in-out">
                    
                        <h4 className=" text-white mb-2">Name</h4>

                        <input type="text" onChange={e => setName(e.target.value)} value={name}
                            className="w-full outline-0 bg-slate-800   border-transparent  border-2 rounded-sm text-white px-4 py-2 shadow-[rgba(255,_255,_255,_0.2)_0px_0px_1px_1px,_rgba(6,_24,_44,_0.65)_0px_1px_1px_-1px,_rgba(255,_255,_255,_0.01)_0px_1px_0px_inset] focus:border-blue-600 focus:border-2" />

                    </label>
                    }
                    <label htmlFor=""  >
                        <h4 className=" text-white mb-2">Email</h4>

                        <input type="text" onChange={e => setEmail(e.target.value)} value={email}
                            className="w-full outline-0 bg-slate-800   border-transparent  border-2 rounded-sm text-white px-4 py-2 shadow-[rgba(255,_255,_255,_0.2)_0px_0px_1px_1px,_rgba(6,_24,_44,_0.65)_0px_1px_1px_-1px,_rgba(255,_255,_255,_0.01)_0px_1px_0px_inset] focus:border-blue-600 focus:border-2" />

                    </label>

                    <label htmlFor="">
                        <h4 className=" mb-2  text-white">Password</h4>

                        <input type="password" onChange={e => setPassword(e.target.value)} value={password}
                            className="w-full outline-0 shadow-[rgba(255,_255,_255,_0.2)_0px_0px_1px_1px,_rgba(6,_24,_44,_0.65)_0px_1px_1px_-1px,_rgba(255,_255,_255,_0.01)_0px_1px_0px_inset] bg-slate-800 border-transparent  border-2 text-white px-4 py-2 rounded-sm focus:border-blue-600 focus:border-2" />

                    </label>
                    <button className="bg-blue-600 rounded-sm py-2 font-bold text-white" type="submit">{register === false ? 'Login' : 'Register'}</button>
                    <div className="text-center text-white">
                        Already a member <span  onClick={handleToggle} className="text-blue-500 cursor-pointer" >{register === true ? 'Login' : 'Register'}</span> here</div>
                </form>

            </div>

        </div>
    )
}

export default Registration
