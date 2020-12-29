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
  BlockItem,
  BlockTitle,
  BlockDescription,
  BlockContainer
} from "./styles";
import LazyImage from "atoms/ui/lazyimage";
import { ModalContext } from "context/modal";
import ReactPlayer from 'react-player'

const ProjectBlocks = ({ blocks = [] }) => {
  return (
    <>
      {blocks.map(({ title, description, media }, index) => {
        return (
          <BlockContainer>
            <BlockTitle key={`block__${index}`}>{title}</BlockTitle>
            <BlockDescription key={`block__${index}`}>{description}</BlockDescription>
            {media.image ? <LazyImage {...media.image} /> : null}
            {media.video ? <ReactPlayer {...media.video} controls={true} /> : null}
          </BlockContainer>
        );
      })}
    </>
  );
};

const ProjectCard = ({ image, children, blocks }) => {
  const { handleModal } = useContext(ModalContext); // trigger modal

  return (
    <CardItem onClick={() => handleModal(blocks)}>
      <ImageBackground>
        <LazyImage {...image} />
      </ImageBackground>
      <DetailsContainer>{children}</DetailsContainer>
    </CardItem>
  );
};

const Project = ({ image, subtitle, title, blocks }) => {
  return (
    <ProjectCard image={image} blocks={<ProjectBlocks blocks={blocks} />}>
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
