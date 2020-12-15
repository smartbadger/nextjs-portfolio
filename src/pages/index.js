import ContentSection from "components/content-section";
import Hero from "components/hero";
import Skills from "components/skills";
import Experience from "components/experience";
import Projects from "components/projects";
import Certs from "components/certs";
import Contact from "components/contact";
import { PageWrapper } from "atoms/ui/layout";
import { getContent } from "context/language";
import Head from 'next/head';
const Index = () => {
  return (
    <>
      <Head>
        <title>{getContent("meta").title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
    </>
  );
};

export default Index;
