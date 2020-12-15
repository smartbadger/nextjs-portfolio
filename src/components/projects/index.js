import { Heading, Grid } from "atoms/ui/elements";
import { Title, SubTitle, Details, Link, CardItem, ImageBackground, DetailsContainer} from "./styles";
import LazyImage from "atoms/ui/lazyimage";

const ProjectCard = ({image, children}) => {
    return(
        <CardItem>
            <ImageBackground>
                <LazyImage {...image} />
            </ImageBackground>
            <DetailsContainer>
                {children}
            </DetailsContainer>
        </CardItem>
    )
}
const Project = ({image, subtitle, title, tag, details}) => {
    return (
        <ProjectCard image={image}>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <Details>{details}</Details>
        </ProjectCard>
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