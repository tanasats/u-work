"use client"
import { Input } from '@/components/ui/input'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useState, ChangeEvent, FormEvent } from 'react';
//import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { setCookie,getCookie } from 'cookies-next'
//import { cookies } from 'next/headers'



type FormData = {
    username: string;
    password: string;
};


const pagesignin = () => {
    const router = useRouter();
    const [data, setData] = useState<FormData>({ username: '', password: '' });
    const [responseMessage, setResponseMessage] = useState<string>('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const res = await fetch('https://data.msu.ac.th/api/auth/v2/signin', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('tanasat.s@msu.ac.th:sudjing')
                },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            console.log(result);
            if (result.access_token) {
                localStorage.setItem("accessToken", result.access_token)

                const expires = new Date(Date.now() +10 * 1000);
                


                setCookie('userData',JSON.stringify(result),{
                    maxAge:60*60*24*1, // ใช้งานได้ 1 วัน
                });

                //cookies().set("uData",JSON.stringify({id:1,name:"xxxx yyyy"}));



                
                router.push('/dashboard')
            }else{
               setResponseMessage("username or password incorrect"); 
            }
            
        } catch (error) {
            console.log(error)
            setResponseMessage("Login fail!!");
        }

    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };


    return (
        <div className='flex flex-col justify-center items-center size-fill h-screen'>
            <Card className='w-[320px] shadow-none'>
                <CardHeader>
                    <CardTitle className='text-2xl'> เข้าใช้งาน</CardTitle>
                    <CardDescription className='font-light'>เข้าใช้งานระบบโดยใช้ username/password ของระบบ MSU Authentication</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className='grid gap-4'>
                        <div className='grid gap-2'>
                            <Label>Username:</Label>
                            <Input
                                type="text"
                                name="username"
                                placeholder="Name"
                                value={data.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='grid gap-2'>
                            <Label>Password:</Label>
                            <Input
                                type="text"
                                name="password"
                                placeholder="password"
                                value={data.password}
                                onChange={handleChange}
                            />
                        </div>
                        <Button type="submit">Signin</Button>
                    </form>
                </CardContent>
            </Card>
            {responseMessage && <p>{responseMessage}</p>}
            <div className='my-3 text-sm'>
                <a href="/" className=''>หน้าหลัก</a>
            </div>
        </div>
    )
}

export default pagesignin