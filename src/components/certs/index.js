import { Heading, Image, Flex, Box, Button, Text } from "atoms/ui/elements";
import { ExpItem } from "./styles";
import { useState, useEffect } from "react";

const CertItem = ({icon, subtitle, title, details, }) => {
    return (
        <div>
            <Text>{title}</Text>
        </div>
    )
}
const Cert = ({title, certs}) => {
    return (
        <>
            <Heading>{title}</Heading>
            <div>
            {certs.map(item => <CertItem key={`cert__${item.title}`} {...item} />)}
            </div>
        </>
    )
}

export default Cert