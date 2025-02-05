import BeforeAfter from "@/components/before-after";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
//import LogoClouds from "@/components/logo-clouds";

export default function Home() {
  return (
    <Container>
      <Header></Header>
      <Hero/>
      {/*<LogoClouds/>*/}
      <BeforeAfter/>
    </Container>
  );
}
