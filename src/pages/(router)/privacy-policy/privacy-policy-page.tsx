import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-[65vh] bg-[#fbf8f2] px-5 py-10 sm:px-8 sm:py-16">
      <section className="mx-auto flex max-w-3xl flex-col gap-6 rounded-[2rem] border border-[#e9e3dc] bg-white/75 p-6 text-[#20372e] shadow-[0_30px_90px_-64px_rgba(32,55,46,0.42)] backdrop-blur-md sm:p-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a36e69]">The important details</p>
        <h1 className="border-b border-[#e9e3dc] pb-4 font-serif text-3xl sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="leading-7 text-[#707970]">
          Bloom Beauty respects your privacy. This portfolio demo site uses
          static content only and does not collect personal data through a
          backend. Any information you enter in forms on this site is for
          demonstration purposes and is not stored or transmitted.
        </p>
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-xl">Information We Display</h2>
          <p className="leading-7 text-[#707970]">
            Product, blog, and account pages use sample data to showcase the
            shopping experience. Replace placeholder content and connect real
            services before launching a production store.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-xl">Contact</h2>
          <p className="leading-7 text-[#707970]">
            Questions about this policy? Reach us at bloombt@kmail.com or visit
            our Contact us page.
          </p>
        </div>
        <p className="text-xs text-[#9b9d94]">Last updated: June 2026</p>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
