import { Suspense } from "react";
import FirstSection from "./section/firstsection/page";
import SlideSection from "./section/slide/page";
import ProjectsSection from "./section/projects/page";
import AboutMeSection from "./section/aboutme/page";
import WhatIDoSection from "./section/whatido/page";
import ContactSection from "./section/contact/page";

// Skeleton imports
import {
  FirstSectionSkeleton,
  ProjectsSkeleton,
  AboutMeSkeleton,
  GenericSectionSkeleton,
  ContactSkeleton,
} from "./component/skeletons";

import HasMounted from "./component/HasMounted";

export default function Home() {
  return (
    <HasMounted 
      fallback={
        <div className="bg-black">
          <FirstSectionSkeleton />
        </div>
      }
    >
      <Suspense fallback={<FirstSectionSkeleton />}>
        <FirstSection />
      </Suspense>
      
      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsSection />
      </Suspense>
      
      <Suspense fallback={<GenericSectionSkeleton />}>
        <SlideSection />
      </Suspense>
      
      <Suspense fallback={<AboutMeSkeleton />}>
        <AboutMeSection />
      </Suspense>
      
      <Suspense fallback={<GenericSectionSkeleton />}>
        <WhatIDoSection />
      </Suspense>
      
      <Suspense fallback={<ContactSkeleton />}>
        <ContactSection />
      </Suspense>
    </HasMounted>
  );
}
