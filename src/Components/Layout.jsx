import React from 'react'
import Footer from './Footer'
import Navbar from "./Navbar"


const Layout = ({ children }) => {
    return (
        <div className=" bg-zinc-800 min-h-screen flex flex-col">

            {/* Navbar */}
            <div>
                <div className="max-w-6xl mx-auto px-4">
                    <Navbar />
                </div>
            </div>

            {/* Main Content */}
            <main className="grow">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <div>
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default Layout