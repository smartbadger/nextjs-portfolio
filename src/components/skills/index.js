import ContentSection from "components/content-section";
import { Heading, Image, Flex, Box, Button, Text } from "atoms/ui/elements";
import { FillerStyles, ContainerStyles, SkillItem, SkillTab} from "./styles";
import { useState, useEffect } from "react";

const SkillLevel = ({ value }) => {
  return (
    <ContainerStyles>
      <FillerStyles value={value} fillColor={"green"} />
    </ContainerStyles>
  );
};

const CreateSkill = ({ skill, category, image, lvl }) => {
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
  skills.forEach((skillObj, index) => {
    const { category } = skillObj;
    if (!group[category] || !group[category].length) {
      group[category] = [];
    }
    group[category].push(<CreateSkill {...skillObj} key={`skill-${index}`} />);
  });
  return group;
};

const CategoryTabs = ({categories, active}) => (<>{categories.map(c => <SkillTab key={`skilltab__${c}`} active={c== active} >{c}</SkillTab>)}</>)

const Skills = ({ title, skills }) => {
  const [category, setCategory] = useState(skills[0].category);
  const SkillGroup = buildSkillGroups(skills);
  return (
    <ContentSection>
      <Heading>{title}</Heading>
      <CategoryTabs active={category} categories={Object.keys(SkillGroup)} />
      <div>{SkillGroup[category]}</div>
    </ContentSection>
  );
};

export default Skills;
