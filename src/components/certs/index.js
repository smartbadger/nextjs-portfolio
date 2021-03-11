import { Heading, Text, Box } from "atoms/ui/elements";
import { ExpTitle, Explink, Explist, ExpDetails } from "./styles";
import LazyImage from "atoms/ui/lazyimage";
import moment from "moment";

const CertItem = ({date, issuer, title }) => {
    return (
        <Explink>
            <ExpTitle>{title}</ExpTitle>
            <ExpDetails>{issuer} | {moment(date).format('MMM YYYY')}</ExpDetails>
        </Explink>
    )
}
const Cert = ({title, certs}) => {
    return (
        <>
            <Heading>{title}</Heading>

            <Explist>
                {certs.map(item => <CertItem key={`cert__${item.title}`} {...item} />)}
            </Explist>

        </>
    )
}

export default Cert