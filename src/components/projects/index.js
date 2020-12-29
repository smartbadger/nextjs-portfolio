import { Heading } from "atoms/ui/elements";
import { useContext } from "react";
import {
  Title,
  SubTitle,
  Details,
  Link,
  CardItem,
  ImageBackground,
  DetailsContainer,
  CardGrid,
} from "./styles";
import LazyImage from "atoms/ui/lazyimage";
import { ModalContext } from "context/modal";

const ProjectBlocks = () => {
  let { handleModal } = useContext(ModalContext); // close modal
};

const ProjectCard = ({ image, children }) => {
    let { handleModal } = useContext(ModalContext); // trigger modal
  return (
    <CardItem onClick={() => handleModal(<p>test</p>)}>
      <ImageBackground>
        <LazyImage {...image} />
      </ImageBackground>
      <DetailsContainer>{children}</DetailsContainer>
    </CardItem>
  );
};

const Project = ({ image, subtitle, title, blocks }) => {
  return (
    <ProjectCard image={image}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </ProjectCard>
  );
};

const Projects = ({ title, items }) => {

  return (
    <>
      <Heading>{title}</Heading>
      <CardGrid>
        {items.map((item) => (
          <Project key={item.title} {...item} />
        ))}
      </CardGrid>
    </>
  );
};

export default Projects;

import React from "react";
