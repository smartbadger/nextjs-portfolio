import ContentSection from "components/content-section";
import { Heading, Image, Flex, Box, Button, Text } from "atoms/ui/elements";
import { ExpItem } from "./styles";
import { useState, useEffect } from "react";

const Project = ({company, title, startdate, enddate}) => {
    return (
        <div>
            <p>{title}</p>
        </div>
    )
}
const Projects = ({title, details, items}) => {
    return (
        <ContentSection>
            <Heading>{title}</Heading>
            <div>
            {items.map(item => <Project {...item} />)}
            </div>
        </ContentSection>
    )
}

export default Projects