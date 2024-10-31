import CryptoInvesting from "./components/CryptoInvesting";
import CustomerSupport from "./components/CustomerSupport";
import EmailSupport from "./components/EmailSupport";
import FeaturedStats from "./components/FeaturedStats";
import Hero from "./components/Hero";
import IndustryStats from "./components/IndustryStats";
import LearnMore from "./components/LearnMore";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedStats />
      <LearnMore />
      <CustomerSupport />
      <IndustryStats />
      <CryptoInvesting />
      <EmailSupport />
    </>
  );
}
