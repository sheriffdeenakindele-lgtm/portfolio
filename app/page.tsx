import FirstSection from "./section/firstsection/page";
import SlideSection from "./section/slide/page";
import ProjectsSection from "./section/projects/page";
import AboutMeSection from "./section/aboutme/page";
import WhatIDoSection from "./section/whatido/page";
import ContactSection from "./section/contact/page";

export default function Home() {
  return (
    <div>
      <FirstSection />
      <ProjectsSection />
      <SlideSection />
      <AboutMeSection />
      <WhatIDoSection />
      <ContactSection />
    </div>
  );
}
