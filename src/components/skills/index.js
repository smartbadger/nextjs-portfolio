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
  const [category, setCategory] = useState(skills[0].category);
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

  const CreateSkill = ({ skill, category, image, lvl }) => {
    return (
      <SkillItem data-category={category}>
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
      setCategory(target.dataset.category);
    }
  };
  
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }


  const CategoryTabs = ({ categories, active }) => (
    <SkillTabsContainer>
      {categories.map((c) => (
        <SkillTab
          key={`skilltab__${c}`}
          data-active-category={c == active}
          data-category={c}
          onClick={changeSkill}
        >
          {c}
        </SkillTab>
      ))}
    </SkillTabsContainer>
  );
  const catagories = skills.map(el => el.category).filter(onlyUnique)

  return (
    <>
      <Heading>{title}</Heading>
      <CategoryTabs
        data-active-category={category}
        categories={catagories}
      />
      <SkillsGrid data-active-category={category} dac={category}>
        { 
          skills.map((skillObj, index) => <CreateSkill {...skillObj} key={`skill-${index}`} />)
        }
      </SkillsGrid>
    </>
  );
};

export default Skills;