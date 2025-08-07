import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const data = {
  "sh-returns": {
    headers: [
      {
        title: "SHIPPING",
        subtitles: [
          {
            title: "Domestic Shipping",
            desc: "We offer domestic shipping across the United States. All orders are processed within 1–2 business days. Standard delivery takes 3–5 business days. Expedited options are available at checkout. Shipping confirmation and tracking details will be sent via email."
          },
          {
            title: "International Shipping",
            desc: "We're pleased to offer international shipping via BorderGuru. International shipping and import fees including customs duties, taxes, and fees are calculated at checkout. Depending on destination, transit time can take from 4 to 12 business days. Please note we do not accept returns on international orders. All products are shipped directly from Los Angeles, CA. Orders placed before 3 PM PST/PDT will be processed and shipped by the next business day. Orders placed on Fridays and over the weekend will be processed and shipped by the following Monday. Shipping confirmation email along with tracking information will be sent when your order is processed. Please note we are not responsible for lost or stolen packages, or returned or delayed packages by the postal service."
          },
          {
            title: "Shipping Restriction",
            desc: "We currently do not ship to P.O. boxes, APO/FPO addresses, or certain countries due to legal and logistical restrictions. Please check the available shipping destinations at checkout."
          }
        ]
      },
      {
        title: "RETURNS",
        subtitles: [
          {
            title: "Return Policy",
            desc: "We accept returns within 30 days of delivery for unused, unworn, and unwashed items in their original packaging. Items marked as final sale are not eligible for return."
          },
          {
            title: "How to Return",
            desc: "To initiate a return, please visit our Returns Portal and enter your order number and email. Follow the provided instructions to generate a return label. A return shipping fee may be deducted from your refund."
          },
          {
            title: "Refunds",
            desc: "Once your return is received and inspected, you will receive an email confirmation. Approved refunds will be processed to your original payment method within 5–7 business days."
          }
        ]
      }
    ]
  },
  "about-us": {
    headers: [
      {
        title: "ABOUT US",
        subtitles: [
          {
            title: "Our Story",
            desc: "Founded in 2020 in Los Angeles, our brand is committed to creating high-quality, sustainable fashion that empowers individuals to express their identity. We believe in ethical production and timeless design."
          },
          {
            title: "Our Values",
            desc: "We value transparency, community, and creativity. Every piece is thoughtfully designed and produced with care for people and the planet."
          }
        ]
      }
    ]
  },
  "contact-us": {
    headers: [
      {
        title: "CONTACT US",
        subtitles: [
          {
            title: "Customer Support",
            desc: "Our support team is available Monday to Friday, 9 AM – 6 PM PST. Contact us at support@example.com or fill out the contact form on our website. We typically respond within 24–48 hours."
          },
          {
            title: "Business Inquiries",
            desc: "For partnerships, press, or wholesale inquiries, please email business@example.com. We'd love to hear from you."
          }
        ]
      }
    ]
  },
  "faqs": {
    headers: [
      {
        title: "FREQUENTLY ASKED QUESTIONS",
        subtitles: [
          {
            title: "Where is my order?",
            desc: "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your shipment on the courier's website."
          },
          {
            title: "Can I change or cancel my order?",
            desc: "Orders can be changed or canceled within 1 hour of placing them. After this window, we start processing the order and may be unable to make changes."
          },
          {
            title: "Do you offer gift cards?",
            desc: "Yes, we offer digital gift cards in various amounts. They can be purchased through our website and sent via email to the recipient."
          },
          {
            title: "Are your products sustainable?",
            desc: "Sustainability is at the heart of what we do. We use eco-friendly materials and work with ethical factories to ensure a responsible supply chain."
          }
        ]
      }
    ]
  }
} as const

type TabKey = keyof typeof data

type TabAboutProps = {
  tabName: TabKey;
};

const TabAbout = ({ tabName }: TabAboutProps) => {
  const defaultKey = "0-0"
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    [defaultKey]: true
  });

  const section = data[tabName];

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className='
      w-full max-w-none
      px-4 py-6
      sm:px-6 sm:py-8
      md:px-8 md:py-10
      lg:px-12 lg:py-12
      xl:px-20 xl:py-16
      rounded-xl text-[#383838] bg-white
    '>
      {section.headers.map((header, headerInd) => (
        <div 
          key={headerInd} 
          className='
            w-full
            mb-6 sm:mb-8 md:mb-10 lg:mb-12
          '
        >
          <h1 className='
            font-bold 
            text-lg sm:text-xl md:text-2xl lg:text-3xl
            border-b border-[#97a3b0]
            pb-3 sm:pb-4 md:pb-5 lg:pb-6  
          '>
            {header.title}
          </h1>
          
          {header.subtitles.map((sub, subInd) => {
            const key = `${headerInd}-${subInd}`;
            const isOpen = openItems[key];
            
            return (
              <div key={subInd} className='mb-3 sm:mb-4'>
                <button
                  role="button"
                  className='
                    w-full text-left
                    border-b border-[#97a3b0] 
                    leading-5 
                    py-3 px-2
                    sm:py-4 sm:px-3
                    md:py-4 md:px-4
                    lg:py-5 lg:px-5
                    font-medium 
                    text-sm sm:text-base md:text-lg
                    flex items-center justify-between 
                    cursor-pointer
          
                    transition-colors duration-200
                  '
                  onClick={() => toggleItem(key)}
                >
                  <span className='flex-1 pr-2'>{sub.title}</span>
                  {isOpen ? (
                    <ChevronUp className="
                      w-4 h-4 
                      sm:w-5 sm:h-5 
                      md:w-6 md:h-6
                      flex-shrink-0
                    " />
                  ) : (
                    <ChevronDown className="
                      w-4 h-4 
                      sm:w-5 sm:h-5 
                      md:w-6 md:h-6
                      flex-shrink-0
                    " />
                  )}
                </button>
                
                {isOpen && (
                  <div className='
                    border-b border-[#97a3b0]
                    pb-3 sm:pb-4 md:pb-5
                    mt-2 sm:mt-3
                    pl-2 sm:pl-3 md:pl-4 lg:pl-5
                    pr-2 sm:pr-3 md:pr-4
                  '>
                    <p className='
                      text-sm sm:text-base md:text-lg
                      leading-relaxed
                      text-gray-700
                    '>
                      {sub.desc}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default TabAbout;
