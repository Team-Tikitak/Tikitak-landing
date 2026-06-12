import {
  Characters,
  Cta,
  Faq,
  Header,
  Hero,
  Manifesto,
  ProblemStat,
  ScrollManager,
  SiteFooter,
  Solution,
} from './_components';

export default function HomePage() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main id="top">
        <Hero />
        <ProblemStat />
        <Manifesto />
        <Solution />
        <Characters />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
