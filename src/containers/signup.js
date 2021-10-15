// import React from "react";

// export default () => {
//     return <div>Signup page</div>
// }

// import React, { useState } from 'react'

// function Signup() {
//     const [name,setName] = useState("")
//     const [password,setPassword] = useState("")
//     const [email,setEmail] = useState("")
//     return (
//         <div>
//             <h1> Register page</h1>
//             <input type="text" value={name} onChange={(e)=> setName(e.target.value)} name="username" id="username"  />
//             <br />
//             <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} name="email" id="email"  />
//             <br />
//             <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name="password" id="password"  />
//             <button>Sign up!</button>
//         </div>
//     )
// }


// export default Signup

import React, { Component } from 'react'
import { useHistory } from 'react-router'

export default class signup extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            password2:'',
            email:'',
            
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    async submitForm(e){
        e.preventDefault()
        
        const { username, password, email ,password2} = this.state

        // if(username === "admin" && password==="admin" ){
        //     this.setState({
        //         loggedIn:true
        //     })
        // }
        // console.warn(username);
        // console.warn(email);
        // console.warn(password);
        // console.warn(password2);
        // let item = {username,email,password,password2}
        // console.warn(item);
        // let result = await fetch("http://127.0.0.1:8000/api/account/register",{
        //     method: 'POST',
        //     body: JSON.stringify(item),
        //     headers:{
        //         "Content-Type":'application/json',
        //         "Accept":'application/json'
        //     }
           
        // })
        // result = await result.json()
        // localStorage.setItem("user-info",JSON.stringify(result))
       
    }
    render() {
        return (
            <center>
                <br /><br /><br />
             <div>
            <h2>Register for a new account</h2>
            <form onSubmit={this.submitForm}>
            <input type="text" title="username" name="username" value={this.state.username} onChange={this.onChange} placeholder="username" />
            <br />
            <input type="email" title="email" name="email" value={this.state.email} onChange={this.onChange} placeholder="email" />
            <br />
            <input type="password" title="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="password" />
            <br />
            <input type="password" title="password" name="password2" value={this.state.password2} onChange={this.onChange} placeholder="Re-type password" />
            <br />
            <button type="submit"  class="btn">Sign up</button>
            <p><a  href="/login">Login</a></p>
            </form>
            </div>
            </center>
        )
    }
}
