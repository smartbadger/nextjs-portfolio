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
      <Hero {...getContent("hero")} background="darkBlue" />
      <Skills {...getContent("skills")} background="lightGray"/>
      <Experience {...getContent("experience")} background="darkBlue"/>
      <Projects {...getContent("projects")} background="lightGray"/>
      <Certs {...getContent("certifications")} background="white"/>
      <Contact {...getContent("contact")} background="lightGray"/>
    </PageWrapper>
  );
};

export default Index;
