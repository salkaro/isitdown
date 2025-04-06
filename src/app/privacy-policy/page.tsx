import Link from "next/link";
import Layout from "../components/Layout";

export default function PrivacyPolicy() {
    return (
        <Layout>
            <section className="text-center py-16 w-full">
                <Link className="text-black font-bold" href="https://www.termsfeed.com/live/1b08e4ef-d956-49b3-bd82-0e118b8110ce" target="_blank">Privacy Policy</Link>
            </section>
        </Layout>
    );
}

