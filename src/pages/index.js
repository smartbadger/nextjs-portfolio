import ContentSection from "components/content-section";
import Hero from "components/hero";
import Skills from "components/skills";
import Experience from "components/experience";
import Projects from "components/projects";
import Certs from "components/certs";
import Contact from "components/contact";
import { PageWrapper } from "atoms/ui/layout";
import { getContent } from "context/language";

const Index = () => {
  return (
    <PageWrapper>
      <ContentSection background="darkBlue">
        <Hero {...getContent("hero")} textColor="white"/>
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
    </PageWrapper>
  );
};

export default Index;
