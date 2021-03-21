import { Heading, Flex, Card } from "atoms/ui/elements";
import LazyImage from "atoms/ui/lazyimage";
import {
  FillerStyles,
  ContainerStyles,
  SkillItem,
  SkillTab,
  SkillText,
  SkillName,
  SkillTabsContainer,
  SkillsGrid
} from "./styles";
import { useState, useEffect } from "react";

const Skills = ({ title, skills }) => {
  const filteredSkills = skills.filter(el => !el.hide)

  const [catagory, setCatagory] = useState(filteredSkills[0].catagory);
  const getSkillLevel = (value) => {
    switch (true) {
      case value >= 0.7:
        return "expert";
      case value < 0.7 && value >= 0.5:
        return "intermediate";
      default:
        return "beginner";
    }
  };

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

  const CreateSkill = ({ skill, catagory, image, lvl }) => {
    return (
      <SkillItem data-catagory={catagory}>
        <Card>
          <Flex flexDirection="column" alignItems="center" justify="center">
            <LazyImage {...image} />
            <SkillName>{skill}</SkillName>
            <SkillLevel value={lvl} />
          </Flex>
        </Card>
      </SkillItem>
    );
  };

  const changeSkill = ({ target }) => {
    if (target) {
      setCatagory(target.dataset.catagory);
    }
  };
  
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }


  const CatagoryTabs = ({ catagories, active }) => (
    <SkillTabsContainer>
      {catagories.map((c) => (
        <SkillTab
          key={`skilltab__${c}`}
          data-active-catagory={c == active}
          data-catagory={c}
          onClick={changeSkill}
        >
          {c}
        </SkillTab>
      ))}
    </SkillTabsContainer>
  );
  const catagories = filteredSkills.map(el => el.catagory).filter(onlyUnique)

  return (
    <>
      <Heading>{title}</Heading>
      <CatagoryTabs
        data-active-catagory={catagory}
        catagories={catagories}
      />
      <SkillsGrid data-active-catagory={catagory} catagories={catagories}>
        { 
          filteredSkills.map((skillObj, index) => <CreateSkill {...skillObj} key={`skill-${index}`} />)
        }
      </SkillsGrid>
    </>
  );
};

export default Skills;