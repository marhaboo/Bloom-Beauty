import NewArrivals from "@/widgets/main/arrivals/arrivals";
import BestSellers from "@/widgets/main/bestsellers/bestsellers";
import HeroSection from "@/widgets/main/hero-section/hero-section";
import ImageProductShowcase from "../(main)/images/IMAGE-1.png";
import ImageProductShowcase_2 from "../(main)/images/IMAGE.png";
import ProductShowcase from "@/widgets/main/product showcase/product shocase";
import OnTheBlog from "@/widgets/main/on-the-blog/on-the-blog";
import QuizCard from "@/widgets/main/qiuz-card/quiz-card";
import ShareCard from "@/widgets/main/share-card/share-card";
import { Flower2, HeartHandshake, Leaf } from "lucide-react";

const promises = [
  {
    icon: Leaf,
    title: "Plant-powered care",
    text: "Thoughtful ingredients, chosen with care.",
  },
  {
    icon: Flower2,
    title: "A little daily ritual",
    text: "Make more room for feel-good moments.",
  },
  {
    icon: HeartHandshake,
    title: "Kind by nature",
    text: "Gentle on your skin and your senses.",
  },
];

export default function MainPage() {
  return (
    <main className="overflow-hidden bg-[#fffdf9]">
      <HeroSection />

      <section
        aria-label="Our promises"
        className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 px-5 py-9 sm:grid-cols-3 sm:gap-0 sm:px-8 sm:py-11 lg:px-12"
      >
        {promises.map(({ icon: Icon, title, text }, index) => (
          <div
            key={title}
            className={`flex items-center justify-start gap-3 border-b border-[#e9e3dc] pb-4 last:border-0 last:pb-0 sm:justify-center sm:border-b-0 sm:pb-0 ${
              index > 0 ? "sm:border-l sm:border-[#e9e3dc]" : ""
            }`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5e8e4] text-[#a36e69]">
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-xs font-medium text-[#29352f] sm:text-[13px]">
                {title}
              </p>
              <p className="mt-1 text-[11px] text-[#777d73] sm:text-xs">
                {text}
              </p>
            </div>
          </div>
        ))}
      </section>

      <div className="space-y-20 pb-20 sm:space-y-28 sm:pb-28 lg:space-y-32">
        <div id="new-arrivals" className="scroll-mt-24">
          <NewArrivals />
        </div>
        <BestSellers />

        <ProductShowcase
          row={true}
          imageUrl={ImageProductShowcase}
          title="Blossom Glow Kit"
          text="Reveal your skin's natural glow with a considered ritual of nourishing face and body care. Plant-inspired ingredients bring everyday hydration and a little more softness to your routine."
        />
        <ProductShowcase
          row={false}
          imageUrl={ImageProductShowcase_2}
          title="Floral Essence Masks"
          text="Slow down and give your skin a moment to reset. This flower-inspired collection brings together feel-good masks for a fresh, comfortable, beautifully cared-for complexion."
        />

        <OnTheBlog />
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <QuizCard />
        </div>
        <ShareCard />
      </div>
    </main>
  );
}
