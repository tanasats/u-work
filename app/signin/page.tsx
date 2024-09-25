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
import { authenticate } from './action'

const handleSubmit = async (e:any) =>{
    e.preventDefault();
    console.log("xxxx");
}

const pagesignin = () => {
    return (
        <div className='flex flex-col justify-center items-center size-fill'>
            <Card className='w-[320px] shadow-none'>
                <CardHeader>
                    <CardTitle>signin</CardTitle>
                    <CardDescription>เข้าใช้งานระบบโดยใช้ username/password ของระบบ MSU Authentication</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className='grid gap-4'>
                        <div className='grid gap-2'>
                            <Label>Username:</Label>
                            <Input type="text" />
                        </div>
                        <div className='grid gap-2'>
                            <Label>Password:</Label>
                            <Input type="password" />
                        </div>

                        <Button type="submit">Signin</Button>

                    </form>
                </CardContent>
            </Card>

        </div>
    )
}
export default pagesignin