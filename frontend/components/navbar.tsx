import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                </li>
                <li>
                    <Link href="/signup">
                        <button>Sign Up</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
