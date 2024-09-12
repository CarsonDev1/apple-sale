'use client' 

import Image from 'next/image'
import React from 'react'

const Banner = () => {
    const scrollToTetApple = () => {
        const tetAppleElement = document.getElementById('tet-apple')
        if (tetAppleElement) {
            tetAppleElement.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div>
            <div className="relative shadow-xl">
                <Image src="/banner.png" alt="banner" width={1820} height={1500} quality={100} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-3/4 -translate-x-3/4 translate-y-0 lg:-translate-y-1/2 w-full md:w-2/3">
                    <div className="flex flex-wrap justify-center items-center gap-1 md:gap-4 lg:gap-8 xl:gap-20">
                        {[
                            { icon: "/banner-icon.png", text: "Trúng iPhone 16", iconClass: "translate-x-0 size-5 md:size-12", textClass: "ml-5 md:ml-8 lg:ml-10" },
                            { icon: "/banner-icon-02.png", text: "Trúng trạm sạc", iconClass: "translate-x-0 -translate-y-1/3 size-6 md:size-14", textClass: "ml-6 md:ml-9 lg:ml-12" },
                            { icon: "/banner-icon-03.png", text: "Miễn phí chuyến đi", iconClass: "translate-x-1/5 size-4 md:size-12", textClass: "ml-4 md:ml-10 lg:ml-12" }
                        ].map((item, index) => (
                            <div key={index} className="p-1 text-white rounded-full cursor-pointer opacity-100 scale-95 transition-all duration-400 ease-in-out relative" onClick={scrollToTetApple}>
                                <div className="hidden md:block absolute top-1/2 left-1/2 w-[100%] h-[100%] bg-rose-500/50 rounded-md -translate-x-1/2 -translate-y-1/2 -z-10 md:animate-[ripple_2s_infinite]"></div>
                                <div className="flex items-center gap-2 bg-rose-600 rounded-md relative p-1 md:p-2">
                                    <div className={`absolute left-0 top-1 ${item.iconClass}`}>
                                        <Image src={item.icon} alt="logo" width={100} height={100} className="object-cover animate-[shake_2s_infinite_ease-in-out]" />
                                    </div>
                                    <span className={`text-xs md:text-sm lg:text-base xl:text-lg font-bold ${item.textClass} text-white`}>{item.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner