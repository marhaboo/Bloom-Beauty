"use client"
import React, { useState } from 'react'
import TabAbout from '../tab-about/tab-about'

const NavAbout = () => {
  const [tabName, setTabName] = useState<"sh-returns" | "about-us" | "contact-us" | "faqs">("sh-returns")

  const navItems = [
    { key: "about-us", label: "About us" },
    { key: "sh-returns", label: "Shipping Returns" },
    { key: "contact-us", label: "Contact us" },
    { key: "faqs", label: "FAQs" }
  ] as const

  return (
    <div className='
      flex flex-col lg:flex-row 
      gap-4 sm:gap-5 lg:gap-6 xl:gap-8
      justify-center lg:justify-start lg:items-start
      p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12
      bg-[#F7F6F8]
      min-h-screen
    '>

      <nav className='
        lg:hidden
        w-full
        px-3 py-4
        sm:px-4 sm:py-5
        md:px-6 md:py-6
        bg-white rounded-xl
        overflow-x-auto
      '>
        <div className='flex gap-2 sm:gap-3 md:gap-4 min-w-max'>
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`
                cursor-pointer px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3
                rounded-lg whitespace-nowrap
                text-sm sm:text-base md:text-lg
                font-medium transition-all duration-200
                ${tabName === item.key 
                  ? "text-[#F5A3B7] bg-pink-50 border-2 border-[#F5A3B7]" 
                  : "text-black hover:text-[#F5A3B7] hover:bg-pink-50"
                }
              `}
              onClick={() => setTabName(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Desktop Vertical Navigation */}
      <nav className='
        hidden lg:flex
        px-4 py-6
        lg:px-5 lg:py-8
        xl:px-6 xl:py-10
        w-full lg:w-72 xl:w-80
        lg:min-h-[200px] xl:min-h-[220px]
        flex-col gap-3 lg:gap-4 xl:gap-5
        rounded-xl bg-white
        lg:sticky lg:top-10
      '>
        {navItems.map((item) => (
          <button
            key={item.key}
            className={`
              cursor-pointer text-left
              px-3 py-3 lg:px-4 lg:py-4 xl:px-5 xl:py-4
              rounded-lg
              text-base lg:text-lg xl:text-xl
              font-medium transition-all duration-200
              ${tabName === item.key 
                ? "text-[#F5A3B7] bg-pink-50 border-l-4 border-[#F5A3B7]" 
                : "text-black hover:text-[#F5A3B7] hover:bg-pink-50 hover:border-l-4 hover:border-pink-200"
              }
            `}
            onClick={() => setTabName(item.key)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Content Area */}
      <div className='
        flex-1 
        w-full 
        lg:max-w-none
        min-w-0
      '>
        <TabAbout tabName={tabName} />
      </div>
    </div>
  )
}

export default NavAbout
