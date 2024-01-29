import Footer from "@/containers/home-page/Footer";
import FeatureOne from "@/containers/home-page/feature-one";
import FeaturesGrid from "@/containers/home-page/features-grid";
import Header from "@/containers/home-page/header";
import Hero from "@/containers/home-page/hero";
import Templates from "@/containers/home-page/templates";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturesGrid />
      <Templates />
      <FeatureOne />
      <Footer />
    </div>
  );
}
