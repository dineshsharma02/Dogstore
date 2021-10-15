import React,{ useState} from "react";


export default () => {
    return <center><div className="log-form">
             <h2>Login to your account</h2>
             <form>
             <input type="text" title="username"  placeholder="username" />
             <br />
             <input type="password" title="username"  placeholder="password" />
             <br />
             <button type="submit"  class="btn">Login</button>
             <p><a  href="#">Don't have an account? Register</a></p>
             </form>
         </div>
         </center>
}

const Login = () => {
    return <center><div className="log-form">
            <h2>Login to your account</h2>
            <form>
            <input type="text" title="username"  placeholder="username" />
            <br />
            <input type="password" title="username"  placeholder="password" />
            <br />
            <button type="submit"  class="btn">Login</button>
            <p><a  href="#">Don't have an account? Register</a></p>
            </form>
        </div>
        </center>
}