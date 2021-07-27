import ContentSection from "components/content-section";
import Hero from "components/hero";
import Skills from "components/skills";
import Experience from "components/experience";
import Projects from "components/projects";
import Certs from "components/certs";
import Contact from "components/contact";
import Footer from "components/footer";
import Head from "next/head";
import { PageWrapper } from "atoms/ui/layout";
import { getContent } from "context/language";
import Canvas from "components/canvas-chart-animation";
const Index = () => {

  return (
    <>
      <Head>
        <title>{getContent("meta").title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>" />
      </Head>
      <PageWrapper>
        <ContentSection height="100vh" background="darkBlue">
          <Canvas />
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
      </PageWrapper>
      <Footer {...getContent("meta")} />
    </>
  );
};

export default Index;
