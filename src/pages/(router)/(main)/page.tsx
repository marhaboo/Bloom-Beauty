import NewArrivals from "@/widgets/main/arrivals/arrivals";
import BestSellers from "@/widgets/main/bestsellers/bestsellers";
import Header from "@/widgets/main/header/header";
import HeroSection from "@/widgets/main/hero-section/hero-section";
import ImageProductShowcase from "../(main)/images/IMAGE-1.png"
import ImageProductShowcase_2 from "../(main)/images/IMAGE.png"
import ProductShowcase from "@/widgets/main/product showcase/product shocase";
import OnTheBlog from "@/widgets/main/on-the-blog/on-the-blog";
import QuizCard from "@/widgets/main/qiuz-card/quiz-card";
import ShareCard from "@/widgets/main/share-card/share-card";
import Footer from "@/widgets/main/footer/footer";
export default function MainPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-20">
        <HeroSection />
        <NewArrivals />
        <BestSellers/>
        <ProductShowcase row={true}  imageUrl={ImageProductShowcase} title={"Blossom Glow Kit"} text={"Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams with lotus extract provide deep hydration and rejuvenation. Suitable for all skin types. Vegan, cruelty-free, eco-friendly."} />
        <ProductShowcase row={false}  imageUrl={ImageProductShowcase_2} title={"Floral Essence Masks Sets"} text={"Indulge in the beauty of nature with our Floral Essence Masks set. Each mask features a unique blend of flower extracts to hydrate and nourish your skin. Experience the essence of flowers in your skincare routine."} />
        <OnTheBlog/>
        <QuizCard/>
        <ShareCard/>
        <Footer />
      </div>
    </>
  );
}
