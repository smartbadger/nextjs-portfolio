import { Heading, Image, Flex, Box, Button, Text } from "atoms/ui/elements";
import { ExpItem } from "./styles";
import { useState, useEffect } from "react";

const Experience = ({title, history}) => {
    return (
        <>
            <Heading>{title}</Heading>
            <>
                {history.map(item => <Text key={item.title}>{item.title}</Text>)}
            </>
        </>
    )
}

export default Experience