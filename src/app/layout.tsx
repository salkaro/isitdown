import Head from "next/head";
import type { Metadata } from "next";

// Styles
import "@/styles/globals.css";


export const metadata: Metadata = {
    title: "Is This Website Down? Check Website Status Instantly - Salkaro",
    description: "Quickly check if a website is down or experiencing issues. Enter a URL and get real-time uptime status. Free and easy-to-use website monitoring tool.",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <Head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6066589868368367" crossOrigin="anonymous"></script>
                <meta name="google-adsense-account" content="ca-pub-6066589868368367"></meta>
            </Head>
            <body className={`antialiased`}>
                {children}
            </body>
        </html>
    );
}