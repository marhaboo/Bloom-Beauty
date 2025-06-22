import ShopAllOverLay from '@/widgets/shop-all/shop-all-overlay/shop-all-overlay'
import ShopCards from '@/widgets/shop-all/shop-cards/shop-cards'
import React from 'react'

const ShopAllPage = () => {
  return (
        <div className="bg-[#F9FAFC] flex gap-4.5 py-10 px-10">
          <ShopAllOverLay/>
          <ShopCards />
    </div>
  )
}

export default ShopAllPage
