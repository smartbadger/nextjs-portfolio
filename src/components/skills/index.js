import { Heading, Image, Flex, Box, Button, Text, Grid, Card } from "atoms/ui/elements";
import LazyImage from 'atoms/ui/lazyimage'
import { FillerStyles, ContainerStyles, SkillItem, SkillTab, SkillText} from "./styles";
import { useState, useEffect } from "react";

const getSkillLevel = (value) => {
  switch(true) {
    case value >= 0.7:
      return 'expert'
      break;
    case value < 0.7 && value >= 0.5:
      return 'intermediate'
    default:
      return 'beginner'
  }
}
const SkillLevel = ({ value }) => {
  return (
    <>
      <SkillText>{getSkillLevel(value)}</SkillText>
      <ContainerStyles>
        <FillerStyles value={value} />
      </ContainerStyles>
    </>
  );
};

const CreateSkill = ({ skill, category, image, lvl }) => {
  return (
    <SkillItem data-category={category}>
      <Card>
        <Flex flexDirection="column" alignItems="center" justify="center">
          <LazyImage {...image} />
          <Text>{skill}</Text>
          <SkillLevel value={lvl} />
        </Flex>
      </Card>
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
    <>
      <Heading>{title}</Heading>
      <CategoryTabs active={category} categories={Object.keys(SkillGroup)} />
      <Grid>{SkillGroup[category]}</Grid>
    </>
  );
};

export default Skills;
