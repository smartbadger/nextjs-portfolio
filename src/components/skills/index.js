import ContentSection from "components/content-section";
import { Heading, Image, Flex, Box, Button, Text } from "rebass";
import { FillerStyles } from "./styles";
import { useState, useEffect } from "react";

const SkillLevel = ({ value }) => {
  <ContainerStyles>
    <FillerStyles value={value} fillColor={"green"} />
  </ContainerStyles>;
};

const Skill = ({ skill, category, image, lvl }) => {
  return (
    <SkillItem data-category={category}>
      <Image src={image} alt={skill} />
      <Text>{skill}</Text>
      <SkillLevel value={lvl} />
    </SkillItem>
  );
};

const buildSkillGroups = (skills) => {
  const group = {};
  skills.forEach((skillObj) => {
    const { category } = skillObj;
    console.log(group)
    const list = group[category] && group[category].length ? group[category] : [];
    group[category] = list.push(<Skill {...skillObj} />);
  });
  console.log(group)
  return group;
};

const Skills = ({ title, skills }) => {
  const [category, setCategory] = useState(skills[0].category);
  const SkillGroup = buildSkillGroups(skills);
  return (
    <ContentSection>
      <Heading>{title}</Heading>
      {SkillGroup[category]}
    </ContentSection>
  );
};

export default Skills;
