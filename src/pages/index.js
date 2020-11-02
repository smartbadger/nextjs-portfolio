import Hero from "components/hero";
import Skills from "components/skills";
import Experience from "components/experience";
import Projects from "components/projects";
import Certs from "components/certs";
import { PageWrapper } from "atoms/ui/layout";
import { getContent } from "context/language";

const Index = () => {

  return (
    <PageWrapper>
      <Hero {...getContent("hero")} />
      <Skills {...getContent("skills")} />
      <Experience {...getContent("experience")} />
      <Projects {...getContent("projects")} />
      <Certs {...getContent("certifications")} />
    </PageWrapper>
  );
};

export default Index;
