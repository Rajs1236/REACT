import React from 'react'
import Main from './Mn.jsx'
import { NavLink } from 'react-router'
import { useNavigate } from 'react-router-dom';

function Login() {
  return (
    <div>
        <form className="space-y-4">
<br/><br/>

<input type='text' placeholder='Enter Name'></input>
<br/>
<input type='email' placeholder='Enter Email'></input>
<br/>
<input type='password' placeholder='Enter Password'></input>
<br></br>




 <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" onClick={<Main/>}>Login</button>
        </form>
    </div>
  )
}

export default Login