// import React,{ useState} from "react";


// export default () => {
//     return <center><div className="log-form">
//              <h2>Login to your account</h2>
//              <form>
//              <input type="text" title="username"  placeholder="username" />
//              <br />
//              <input type="password" title="username"  placeholder="password" />
//              <br />
//              <button type="submit"  class="btn">Login</button>
//              <p><a  href="#">Don't have an account? Register</a></p>
//              </form>
//          </div>
//          </center>
// }

// const Login = () => {
//     return <center><div className="log-form">
//             <h2>Login to your account</h2>
//             <form>
//             <input type="text" title="username"  placeholder="username" />
//             <br />
//             <input type="password" title="username"  placeholder="password" />
//             <br />
//             <button type="submit"  class="btn">Login</button>
//             <p><a  href="#">Don't have an account? Register</a></p>
//             </form>
//         </div>
//         </center>
// }



import React, { Component } from 'react'
import { Redirect } from 'react-router'

export default class login extends Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state={
            username:'',
            password:'',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e){
        e.preventDefault()
        const { username, password } = this.state

        if(username === "admin" && password==="admin" ){
            this.setState({
                loggedIn:true
            })
        }
        // console.warn(username);
        // console.warn(password);
        let item = {username,password}
        // console.warn(item);
    }

    render() {
        if (this.state.loggedIn){
            return <Redirect to="/" />
        }
        return (
            <center>
            <br />
            <br /><br />
            <div>
            <h2>Login to your account</h2>
            <h4>(Provide username=admin and password=admin)</h4>
            <form onSubmit={this.submitForm}>
            <input type="text" title="username" name="username" value={this.state.username} onChange={this.onChange} placeholder="username" />
            <br />
            <input type="password" title="username" name="password" value={this.state.password} onChange={this.onChange} placeholder="password" />
            <br />
            <button type="submit"  class="btn">Login</button>
            <p><a  href="/signup">Don't have an account? Register</a></p>
            </form>
            </div>
            </center>
        )
    }
}
