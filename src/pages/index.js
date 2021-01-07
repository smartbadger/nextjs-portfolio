import ContentSection from "components/content-section";
import Hero from "components/hero";
import Skills from "components/skills";
import Experience from "components/experience";
import Projects from "components/projects";
import Certs from "components/certs";
import Contact from "components/contact";
import Footer from "components/footer";
import Head from "next/head";
import { PageWrapper, ScrollSnapWrapper } from "atoms/ui/layout";
import { getContent } from "context/language";
import { useRef, useEffect } from "react";
import ScrollSnap from "scroll-snap";

const Index = () => {
  const container = useRef();
  const callback = () => {
    console.log("element snapped");
  };
  const bindScrollSnap = (container) => {
    const element = container.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationX: "0%",
      snapDestinationY: "100%",
    });

    snapElement.bind(callback);
  };

  useEffect(() => {
    bindScrollSnap(container);
  });

  return (
    <>
      <Head>
        <title>{getContent("meta").title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ScrollSnapWrapper ref={container}>
        <ContentSection background="darkBlue">
          <Hero {...getContent("hero")} textColor="white" />
        </ContentSection>
        <ContentSection background="lightGray">
          <Skills {...getContent("skills")} />
        </ContentSection>
        <ContentSection background="darkBlue">
          <Experience {...getContent("experience")} textColor="white" />
        </ContentSection>
        <ContentSection background="lightGray">
          <Projects {...getContent("projects")} />
        </ContentSection>
        <ContentSection background="white">
          <Certs {...getContent("certifications")} />
        </ContentSection>
        <ContentSection background="lightGray">
          <Contact {...getContent("contact")} />
        </ContentSection>
      </ScrollSnapWrapper>
      <Footer {...getContent("meta")} />
    </>
  );
};

export default Index;
