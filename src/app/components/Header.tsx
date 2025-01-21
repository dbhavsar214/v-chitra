'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [clientToken, setClientToken] = useState<string | null>(null);

    useEffect(() => {

        const catchClientToken = sessionStorage.getItem('clientToken');

        if (catchClientToken) {
            setClientToken(catchClientToken)
            console.log("Client Token :", clientToken);

        } else {
            alert("Client is not Authenticated")
        }
    })
    return (
        <div className="bg-black px-3 py-3 border-b border-gray-600">
            <div className="flex md:flex-row items-center justify-between gap-4 mx-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <h1 className="font-bold text-cyan-400 text-3xl">V</h1>
                </div>

                {/* Search Bar */}
                <div className="w-2/3 md:w-1/3">
                    <label className="relative block w-full">
                        <input
                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none"
                            placeholder="Search for some-one,thing"
                            type="text"
                            name="search"
                        />
                    </label>
                </div>
                {clientToken ? (
                    <div className="flex-shrink-0">
                        <Image
                            className="h-8 w-8 md:h-12 md:w-12 object-cover rounded-full"
                            src="/favicon.ico"
                            alt="Current profile photo"
                            height={48}
                            width={48}
                        />
                    </div>
                ) : (
                    <div className="flex-shrink-0">
                        <Link href="/login" className=" text-cyan-400 text-base">Log In</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
