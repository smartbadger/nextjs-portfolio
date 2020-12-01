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
        <>
            <Heading>{title}</Heading>
            <div>
            {items.map(item => <Project key={item.title} {...item} />)}
            </div>
        </>
    )
}

export default Projects