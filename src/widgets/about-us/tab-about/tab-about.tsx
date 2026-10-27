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
    <section className="w-full rounded-[1.75rem] border border-[#e9e3dc] bg-white/75 px-5 py-6 text-[#20372e] backdrop-blur-md sm:px-8 sm:py-10 lg:px-12 lg:py-12">
      {section.headers.map((header, headerInd) => (
        <div key={headerInd} className="mb-8 w-full last:mb-0 sm:mb-10">
          <h2 className="border-b border-[#e9e3dc] pb-4 font-serif text-2xl sm:text-3xl">
            {header.title}
          </h2>
          
          {header.subtitles.map((sub, subInd) => {
            const key = `${headerInd}-${subInd}`;
            const isOpen = openItems[key];
            
            return (
              <div key={subInd} className="border-b border-[#e9e3dc] last:border-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 py-3 text-left text-sm font-medium leading-6 text-[#29352f] transition-colors duration-200 hover:text-[#a36e69] sm:text-base"
                  onClick={() => toggleItem(key)}
                >
                  <span className="flex-1">{sub.title}</span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 shrink-0 text-[#a36e69]" />
                  ) : (
                    <ChevronDown className="h-4 w-4 shrink-0 text-[#707970]" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="pb-5 pr-8">
                    <p className="text-sm leading-7 text-[#707970]">
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
