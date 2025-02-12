import AccordionFeatures from "@/components/accordion-features";
import BeforeAfter from "@/components/before-after";
import { Container } from "@/components/container";
import CTA from "@/components/cta";
import FadeIn from "@/components/fadein";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
//import LogoClouds from "@/components/logo-clouds";

export default function Home() {
  return (
    <FadeIn>
    <Container className="bg-primary text-white">
      <Header></Header>
      <Hero/>
      {/*<LogoClouds/>*/}
      <BeforeAfter/>
      <AccordionFeatures/>
      <Pricing />
      <FAQ/>
      <CTA/>
      <Footer/>
    </Container>
    </FadeIn>
  );
}
