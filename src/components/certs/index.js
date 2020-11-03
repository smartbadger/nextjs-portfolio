import ContentSection from "components/content-section";
import { Heading, Image, Flex, Box, Button, Text } from "rebass/styled-components";
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
        <ContentSection>
            <Heading>{title}</Heading>
            <div>
            {certs.map(item => <CertItem {...item} />)}
            </div>
        </ContentSection>
    )
}

export default Cert