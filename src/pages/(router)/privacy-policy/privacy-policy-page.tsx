import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-[#F7F6F8] min-h-screen p-4 md:p-10">
      <section className="max-w-3xl mx-auto bg-white rounded-xl p-6 md:p-12 text-[#383838] flex flex-col gap-6">
        <h1 className="text-2xl md:text-3xl font-bold border-b border-[#97a3b0] pb-4">
          Privacy Policy
        </h1>
        <p className="text-[#697586] leading-relaxed">
          Bloom Beauty respects your privacy. This portfolio demo site uses
          static content only and does not collect personal data through a
          backend. Any information you enter in forms on this site is for
          demonstration purposes and is not stored or transmitted.
        </p>
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg">Information We Display</h2>
          <p className="text-[#697586] leading-relaxed">
            Product, blog, and account pages use sample data to showcase the
            shopping experience. Replace placeholder content and connect real
            services before launching a production store.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg">Contact</h2>
          <p className="text-[#697586] leading-relaxed">
            Questions about this policy? Reach us at bloombt@kmail.com or visit
            our Contact us page.
          </p>
        </div>
        <p className="text-sm text-[#BFB9CF]">Last updated: June 2026</p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
