import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full max-w-7xl h-full mx-auto px-4 relative">
            {children}
        </div>
    )
}

export default Container