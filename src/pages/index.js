
import Hero from "components/hero"
import Skills from "components/skills"
import Experience from "components/experience"
import Projects from "components/projects"
import Certs from "components/certs"
import { PageWrapper } from "atoms/ui/layout"

const Index = () => {

  return (
    <PageWrapper>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certs />
    </PageWrapper>
  );
};

export default Index
