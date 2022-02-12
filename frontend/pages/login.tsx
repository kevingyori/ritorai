import React, { useState } from 'react'
import { Navbar } from '../components/navbar'

function Login() {
    const [loginRes, setLoginRes] = useState(['not signed in'])

    return (
        <section>
            <Navbar />
            Login
            <pre>{loginRes}</pre>
        </section>
    )
}

export default Login