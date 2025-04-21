"use client";

import Input from "./Input";

import { useEffect, useState } from "react";

const Page = () => {
    const [status, setStatus] = useState<string>("");
    const [ip, setIp] = useState<{ address: string, family: number }>();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', "light");
        return () => {
            document.documentElement.removeAttribute('data-theme');
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center pt-48">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Is This Website Down?</h1>
                <p className="text-md font-semibold mb-4">Check Website Status Instantly</p>
            </div>
            <div className="text-center">
                <Input setStatus={setStatus} setIp={setIp} />
            </div>

            {status && (
                <div className="mt-4 text-lg font-semibold text-center">
                    <p>{status}</p>
                    <p>{ip ? `IPv${ip.family}: ${ip.address}` : ""}</p>
                </div>
            )}
        </div>
    )
}

export default Page
