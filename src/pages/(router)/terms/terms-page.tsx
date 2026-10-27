import React from "react";

const TermsPage = () => {
  return (
    <main className="min-h-[65vh] bg-[#fbf8f2] px-5 py-10 sm:px-8 sm:py-16">
      <section className="mx-auto flex max-w-3xl flex-col gap-6 rounded-[2rem] border border-[#e9e3dc] bg-white/75 p-6 text-[#20372e] shadow-[0_30px_90px_-64px_rgba(32,55,46,0.42)] backdrop-blur-md sm:p-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a36e69]">The important details</p>
        <h1 className="border-b border-[#e9e3dc] pb-4 font-serif text-3xl sm:text-4xl">
          Terms and Conditions
        </h1>
        <p className="leading-7 text-[#707970]">
          By browsing Bloom Beauty, you agree to these terms for this
          demonstration website. This site is presented as a portfolio project
          and does not process real payments or orders.
        </p>
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-xl">Use of Content</h2>
          <p className="leading-7 text-[#707970]">
            All branding, imagery, and copy are for showcase purposes. Do not
            reproduce materials without permission from the site owner.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-xl">Orders &amp; Pricing</h2>
          <p className="leading-7 text-[#707970]">
            Prices and product availability shown are sample data. Checkout and
            cart interactions are simulated for UX demonstration only.
          </p>
        </div>
        <p className="text-xs text-[#9b9d94]">Last updated: June 2026</p>
      </section>
    </main>
  );
};

export default TermsPage;
