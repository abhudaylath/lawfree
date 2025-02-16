import React from 'react'

function Header() {
    return (
        <header className="flex items-center justify-end p-5 bg-white shadow-sm border-b-2">
            <div>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                    Join Membership for ₹49.99
                </button>
            </div>
        </header>
    )
}

export default Header