// Local Imports
import Footer from "./components/Footer";
import Page from "./components/Page";

// External Imports
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Is This Website Down? Check Website Status Instantly - Salkaro",
    description: "Quickly check if a website is down or experiencing issues. Enter a URL and get real-time uptime status. Free and easy-to-use website monitoring tool.",
    openGraph: {
        title: 'Is This Website Down? Check Website Status Instantly - Salkaro',
        description: 'Quickly check if a website is down or experiencing issues. Enter a URL and get real-time uptime status. Free and easy-to-use website monitoring tool.',
        url: "https://isitdown.salkaro.com",
        images: [
            {
                url: "https://i.imgur.com/yYl4AE0.png",
                width: 2496,
                height: 1221,
                alt: "Is This Website Down? Check Website Status Instantly - Salkaro",
            }
        ]
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};


export default function Home() {
    return (
        <div className="w-full">
            <Page />

            {/* Footer */}
            <div className='stick bottom-0'>
                <Footer />
            </div>
        </div>
    );
}
