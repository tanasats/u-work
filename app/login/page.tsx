"use client"
import { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
    username: string;
    password: string;
};

export default function loginpage() {
    const [data, setData] = useState<FormData>({ username: '', password: '' });
    const [responseMessage, setResponseMessage] = useState<string>('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const response = await fetch('https://data.msu.ac.th/api/v1.1/auth/signin', {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('tanasat.s@msu.ac.th:sudjing')
             },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        setResponseMessage(result.message);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1>Send POST Request with JSON Data</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Name"
                    value={data.username}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="password"
                    placeholder="password"
                    value={data.password}
                    onChange={handleChange}
                />
                <button type="submit">Send</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
            <div className="">
                <a href="/">กลับหน้าหลัก</a>
            </div>
        </div>
    );
}