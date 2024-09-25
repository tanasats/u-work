import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { ThemeToggler } from './ThemeToggler'

function Header() {
    const navigation = [
        { title: "Doc", href: "/docs" },
        { title: "Component", href: "/component" },
        { title: "Block", href: "/block" },
        { title: "Signin", href: "/signin"}
    ]
    return (
        <header className="dark:text-gray-300 border-b-[1px] border-black/10 dark:border-b-white/20">
            <Container className='py-5 flex items-center justify-between'>
                <div className="flex items-center gap-x-5">
                    <Link href={"/"} className="text-lg font-bold">
                       <h2>U-work</h2> 
                    </Link>
                    <div className='flex itmes-center gap-x-5 text-sm '>
                        {navigation.map((item,index) => (
                            <span key={index}>
                            <Link href={item.href}>{item.title }</Link>
                            </span>
                        ))}
                    </div>
                </div>
                <ThemeToggler />
            </Container>
        </header>
    )
}

export default Header
