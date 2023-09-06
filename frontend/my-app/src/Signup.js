import React,{useState} from "react";
import axios from "axios";

const Signup = () => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSignup=async(e)=>
    {
        e.preventDefault();
        try
        {
            await axios.post("http://localhost:5000/api/signup",
            {
                username,email,password
            });
            alert("User signed up Sucessfully");
            setUsername("");
            setEmail("")
            setPassword("")
        }
        catch(err)
        {
           // console.error(err)
            alert("An error occcured")
        }
    }
  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
            Username:<input type="text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            Email:<input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            Password:<input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
           <button type="submit">Signup</button>
        </form>
    </div>
  )
}

export default Signup