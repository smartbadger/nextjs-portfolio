import { Heading, Card, Grid } from "atoms/ui/elements";
import { Title, SubTitle, Details, Link } from "./styles";
import { useState, useEffect } from "react";

const Project = ({subtitle, title, tag, details}) => {
    return (
        <Card>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <Details>{details}</Details>
        </Card>
    )
}
const Projects = ({title, details, items}) => {
    return (
        <>
            <Heading>{title}</Heading>
            <Grid>
            {items.map(item => <Project key={item.title} {...item} />)}
            </Grid>
        </>
    )
}

export default Projects