interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-white sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80 2xl:mx-112 flex flex-col items-center pb-48">
            <div className='w-full h-full'>
                {children}
            </div>
        </div>
    )
}

export default Layout
