import NavAbout from '@/widgets/about-us/nav-about/nav-about'
import React, { Suspense } from 'react'

const AboutUsPage = () => {
  return (
    <Suspense fallback={<div className="bg-[#F7F6F8] min-h-screen p-10 text-[#697586]">Loading...</div>}>
      <NavAbout/>
    </Suspense>
  )
}

export default AboutUsPage
