import React, { useState } from 'react'
import { Navbar } from '../components/navbar'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

function Login() {
    const [loginRes, setLoginRes] = useState(['not signed in'])
    const { register, handleSubmit, watch } = useForm();
    const onSubmit: SubmitHandler<FieldValues> = data => {
        fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then(data => setLoginRes([...loginRes, JSON.stringify(data)]))
            .catch((error) => {
                setLoginRes([...loginRes, 'error'])
                console.error('Error:', error)
            })
    }

    console.log(watch("example"));
    return (
        <section>
            <Navbar />
            Login
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="ritorai@gmail.com" {...register("email")} type="email" />
                <input defaultValue="1234" {...register("password")} type="passoword" />
                <input type="submit" />
            </form>
            <pre>{loginRes}</pre>
        </section>
    )
}

export default Login