import React from 'react'

const IdeaNavbar = () => {
    return (
        <>
            <div className="w-full p-4 z-50 fixed top-0 px-16 bg-opacity-80 backdrop-blur-lg bg-gradient-to-r from-gray-800 to-gray-900">
                <h1 className="text-2xl font-bold text-white">BeyondBYTE Ideathon</h1>
                <nav className="float-right">
                    <ul className="flex font-semibold">
                        {["Home", "About", "Problem Statement", "FAQs", "Team Info", "Contact"].map((item) => (
                            <li key={item}>
                                <a href="#" className="text-gray-300 hover:text-yellow-400 mx-6 transition duration-300">{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default IdeaNavbar;