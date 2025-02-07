import AccordionFeatures from "@/components/accordion-features";
import BeforeAfter from "@/components/before-after";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
//import LogoClouds from "@/components/logo-clouds";

export default function Home() {
  return (
    <Container>
      <Header></Header>
      <Hero/>
      {/*<LogoClouds/>*/}
      <BeforeAfter/>
      <AccordionFeatures/>
      <Pricing />
    </Container>
  );
}
