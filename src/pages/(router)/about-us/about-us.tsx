import NavAbout from '@/widgets/about-us/nav-about/nav-about'
import React, { Suspense } from 'react'

const AboutUsPage = () => {
  return (
    <Suspense fallback={<div className="min-h-[65vh] bg-[#fbf8f2] p-10 text-[#707970]">Loading...</div>}>
      <NavAbout/>
    </Suspense>
  )
}

export default AboutUsPage
