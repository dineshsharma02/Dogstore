import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class logout extends Component {
    render() {
        return (
            <div>
                <h1>You have been logged out successfully!!</h1>
                <Link to="/login" >Login again</Link>
            </div>
        )
    }
}
