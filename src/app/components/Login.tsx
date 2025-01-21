'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { validateLoginForm } from '../services/LoginFormValidation';


const Login = () => {

    const [loginFormData, setLoginFormData] = useState({ userName: "", password: "" });
    const [loginErrors, setLoginErrors] = useState<{ field: string; message: string }[]>([]);

    const handleLoginFormSubmission = async (e: React.FormEvent) => {

        e.preventDefault();
        const validationErrors = await validateLoginForm(loginFormData);

        if (validationErrors) {
            setLoginErrors(validationErrors);
            return;
        } else {
            alert("Login SuccessFull")
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginFormData, [name]: value });
    };

    useEffect(() => { })
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="flex flex-col md:flex-row bg-black border border-gray-600 shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
                {/* Left Side: Logo and Caption */}
                <div className="flex flex-col items-center justify-center p-8 bg-black md:w-1/2">
                    <Image
                        className="rounded-full mb-4"
                        src="/favicon.ico"
                        height={120}
                        width={120}
                        alt="Logo Image"
                    />
                    <h1 className="text-xl text-cyan-400 font-bold">Welcome Back!</h1>
                    <p className="mt-8 text-center text-xs text-gray-600">
                        Let&apos;s see what&apos;s intersting on your feed
                    </p>
                </div>

                {/* Right Side: Login Form */}
                <div className="flex flex-col justify-center p-8 md:w-1/2">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-8">Login</h2>
                    <form className="space-y-4" onSubmit={handleLoginFormSubmission}>
                        <div>

                            <input
                                id="email"
                                type="email"
                                className="w-full mt-1 p-3 bg-black border border-gray-600 rounded-full focus:outline-none text-white"
                                placeholder="email"
                                name='userName'
                                value={loginFormData.userName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>

                            <input
                                id="password"
                                type="password"
                                className="w-full mt-1 p-3 bg-black border border-gray-600 rounded-full focus:outline-none text-white"
                                placeholder="password"
                                name='password'
                                value={loginFormData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-32 bg-black  text-white p-3 rounded-full"
                        >
                            Login
                        </button>
                    </form>
                    {loginErrors.length > 0 && (
                        <div className="mt-4 text-sm text-red-500">
                            {loginErrors.map((error) => (
                                <p key={error.field}>{error.message}</p>
                            ))}
                        </div>
                    )}
                    <p className="mt-4 text-sm text-center text-gray-600">
                        First Time? Here, {' '}
                        <a href="#" className="text-cyan-400 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
