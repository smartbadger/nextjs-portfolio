import { Heading, Flex, Box } from "atoms/ui/elements";
import { ExpTitle, Explink, Explist, ExpDetails } from "./styles";
import LazyImage from "atoms/ui/lazyimage";
import moment from "moment";

const Experience = ({ title, history }) => {
  const ExpItem = ({ title, company, startdate, enddate }) => {
    const [start, end] = [moment(startdate), moment(enddate)];
    return (
      <Explink>
        <ExpTitle bg="dark">{title}</ExpTitle>
        <ExpDetails>
          {company} | {start.format("MMM YYYY")} -{" "}
          {end.isValid() ? end.format("MMM YYYY") : enddate}
        </ExpDetails>
      </Explink>
    );
  };
  return (
    <>
      <Heading bg="dark">{title}</Heading>
      <Flex mx={-2}>
        <Box width={1 / 2} px={2}>
          <LazyImage
            alt="man at desk"
            fallback="/images/dude-at-computer.png"
          />
        </Box>
        <Box width={1 / 2} px={2}>
          <Explist>
            {history.map((item) => (
              <ExpItem {...item} key={item.title} />
            ))}
          </Explist>
        </Box>
      </Flex>
    </>
  );
};

export default Experience;
