"use client";

import { useEffect, useState } from "react";
import Input from "./Input";

const Page = () => {
    const [status, setStatus] = useState<string>("");

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', "light");
        return () => {
            document.documentElement.removeAttribute('data-theme');
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-start mt-48">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Is This Website Down?</h1>
                <p className="text-md font-semibold mb-4">Check Website Status Instantly</p>
            </div>
            <div className="text-center">
                <Input setStatus={setStatus} />
            </div>

            {status && (
                <div className="mt-4 text-lg font-semibold text-center">
                    {status}
                </div>
            )}

        </div>
    )
}

export default Page
