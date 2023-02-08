import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Link to='/Login'>Login</Link><br />
            <Link to='/Signup'>Signup</Link>
        </div>
    )
}
