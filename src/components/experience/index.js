import ContentSection from "components/content-section";
import { Heading, Image, Flex, Box, Button, Text } from "rebass/styled-components";
import { ExpItem } from "./styles";
import { useState, useEffect } from "react";

const Experience = ({title, history}) => {
    return (
        <ContentSection>
            <Heading>{title}</Heading>
            <>
                {history.map(item => <Text>{item.title}</Text>)}
            </>
        </ContentSection>
    )
}

export default Experience