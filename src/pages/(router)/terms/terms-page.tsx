import React from "react";

const TermsPage = () => {
  return (
    <div className="bg-[#F7F6F8] min-h-screen p-4 md:p-10">
      <section className="max-w-3xl mx-auto bg-white rounded-xl p-6 md:p-12 text-[#383838] flex flex-col gap-6">
        <h1 className="text-2xl md:text-3xl font-bold border-b border-[#97a3b0] pb-4">
          Terms and Conditions
        </h1>
        <p className="text-[#697586] leading-relaxed">
          By browsing Bloom Beauty, you agree to these terms for this
          demonstration website. This site is presented as a portfolio project
          and does not process real payments or orders.
        </p>
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg">Use of Content</h2>
          <p className="text-[#697586] leading-relaxed">
            All branding, imagery, and copy are for showcase purposes. Do not
            reproduce materials without permission from the site owner.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg">Orders &amp; Pricing</h2>
          <p className="text-[#697586] leading-relaxed">
            Prices and product availability shown are sample data. Checkout and
            cart interactions are simulated for UX demonstration only.
          </p>
        </div>
        <p className="text-sm text-[#BFB9CF]">Last updated: June 2026</p>
      </section>
    </div>
  );
};

export default TermsPage;
