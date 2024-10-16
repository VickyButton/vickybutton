import { useContext } from "react"
import Button from "../../components/Button/Button"
import GridContainer from "../../components/GridContainer/GridContainer"
import Heading from "../../components/Heading/Heading"
import Hyperlink from "../../components/Hyperlink/Hyperlink"
import ImageContainer from "../../components/ImageContainer/ImageContainer"
import LabelledIcon from "../../components/LabelledIcon/LabelledIcon"
import Project from "../../components/Project/Project"
import ScrollContainer from "../../components/ScrollContainer/ScrollContainer"
import Section from "../../components/Section/Section"
import Text from "../../components/Text/Text"
import { MobileContext } from "../../context/MobileContext"
import additionalProjects from "../../data/additionalProjects"
import techStack from "../../data/techStack"
import { optionalRender } from "../../utils/optionalRender"
import "./Home.css"

export default function Home() {
    const { isMobile } = useContext(MobileContext)
    const splashFontSize = "L"
    const splashFontWeight = "L"
    const splashTextAlign = "C"
    const onClick = () => {
        const element = document.getElementById("about")

        if (element) element.scrollIntoView()
    }

    return (
        <>
            <Section className={isMobile ? "mobile" : undefined} id="splash" direction="column" alignItems="center" justifyContent="center" variant="default">
                <Text fontSize={splashFontSize} fontWeight={"B"} align={splashTextAlign}>Welcome,</Text>
                <Text fontSize={splashFontSize} fontWeight={"B"} align={splashTextAlign}>I'm Vicky, a passionate software engineer!</Text>
                <Button variant="default" onClick={onClick}>
                    <Text fontSize={splashFontSize} fontWeight={splashFontWeight}>{"Get to know me >"}</Text>
                </Button>
            </Section>
            <Section id="about" variant="converge-right">
                <Heading>About Me</Heading>
                <Text>Hi there! My name is <Text fontWeight="B">Vicky Button</Text>, nice to meet you!</Text>
                <ImageContainer src="/media/images/vicky-nyc.jpg" alt="Me posing in the center of Times Square in New York City" />
                <Text>From a young age, I knew that software development was what I wanted to pursue in life. I believe that programming is a <Text fontWeight="B">powerful</Text> tool that can be used to create <Text fontWeight="B">extraordinary</Text> experiences. This belief has been a spark of motivation in my career that continues to shine brightly!</Text>
                <Text>I am constantly learning new technologies and practices, but my expertise is in <Text fontWeight="B">full-stack web development</Text>. Here are some of my favorite languages and technologies that I have used professionally:</Text>
                <GridContainer id="tech-stack" className={isMobile ? "mobile" : undefined}>
                    {techStack.map((props) => (
                        <LabelledIcon {...props} key={props.icon} />
                    ))}
                </GridContainer>
                <Text>I am a fast learner and can learn any technology when needed!</Text>
            </Section>
            <Section id="projects" variant="default">
                <Heading>Projects</Heading>
                <Text>I have worked on many projects, both personally and professionally. Here are some of my favorites:</Text>
                <Project title="Browser Game Engine" src="/media/gifs/game-engine.gif">
                    <Text>Inspired by browser games I enjoyed as a kid, I was determined to create my own browser game engine from sctatch. I spent over a year creating and re-iterating a complex game engine complete with spritesheets, sprite animations, collision detection, state tracking, and more!</Text>
                    <Text>Besides <Text fontWeight="B">TypeScript</Text>, no external libraries were used in the development of this game engine. This project was a huge learning experience for me, both in complex system design and in general computer science principles. I learned various technologies and methods, including binary trees, quadtrees, web graphics, rendering, culling, and more. Most importantly, I learned the importance of <Text fontWeight="B">modular programming</Text> in developing complex systems from the bottom up.</Text>
                </Project>
                <Project title="Twitch Paints" src="/media/images/twitch-paints.png">
                    <Text>Inspired by the infamous "Twitch Plays Pokémon", I set out to create a live stream where viewers could draw together!</Text>
                    <Text>To make this idea a reality, I established a <Text fontWeight="B">WebSocket</Text> connection to my Twitch Chat and parsed messages (using <Text fontWeight="B">Regex</Text>) sent by viewers for structured commands. These commands would include a coordinate pair for a cell and a hex color code to paint that cell.</Text>
                </Project>
                <Project title="React Projects">
                    <Text>I am always working on something new! Here are a few more screenshots from React projects that showcase my frontend skills:</Text>
                    {optionalRender(isMobile, <ScrollContainer id="additional-projects" direction="row">
                        {additionalProjects.map((src) => (
                            <ImageContainer src={src} key={src} />
                        ))}
                    </ScrollContainer>)}
                    {optionalRender(!isMobile, <GridContainer id="additional-projects">
                        {additionalProjects.map((src) => (
                            <ImageContainer src={src} key={src} />
                        ))}
                    </GridContainer>)}
                </Project>
            </Section>
            <Section id="journey" variant="converge-right">
                <Heading>My Journey</Heading>
                <Text>Since the age of 12, I have always had interest in tech and programming. Inspired by MMOs such as Club Penguin and Poptropica, I taught myself web development in hopes of someday creating my own browser games.</Text>
                <Text>In high school, I joined my school's robotics team as a software engineer and would work on competition-ready robots. After a year, I was a lead software engineer and was responsible for teaching newcomers how to code as well as communicating with other leads in other departments. Through robotics, I learned the importance of <Text fontWeight="B">inter-team communication</Text>, setting and following through on <Text fontWeight="B">deadlines</Text>, and other important skillsets valuable to working on a <Text fontWeight="B">team</Text>.</Text>
                <Text>After high school, I studied <Text fontWeight="B">Cybersecurity</Text> at the <Text fontWeight="B">University of South Florida</Text>. During this time, I learned a lot about networking and databases and I brushed up on my knowledge of languages such as <Text fontWeight="B">Java</Text> and <Text fontWeight="B">Python</Text>.</Text>
                <Text>Through USF, I landed an internship at <Text fontWeight="B">ReliaQuest</Text>, a cybersecurity firm based in Tampa, Florida. Here I worked on a team responsible for triaging and resolving bug reports. In addition to squishing bugs, I also developed software for internal use to automate various processes used by my team. This internship was very fruitful and further ingrained the importance of <Text fontWeight="B">cross-team collaboration</Text> as I worked with the design team to help create reusable patterns.</Text>
                <Text>Now, after years of freelance work, I am looking to join a company that shares my <Text fontWeight="B">passion</Text> and <Text fontWeight="B">commitment</Text> for creating <Text fontWeight="B">quality</Text> software.</Text>
            </Section>
            <Section id="footer" variant="default">
                <Heading>Get in Touch</Heading>
                <Text>Ready for a new addition to your team? <Text fontWeight="B">Let's talk!</Text></Text>
                <Text fontWeight="B">Email: <Hyperlink href="mailto: vickythewebdev@gmail.com">vickythewebdev@gmail.com</Hyperlink></Text>
                <Text fontWeight="B">Phone number: <Hyperlink href="tel:727-277-1742">(727)277-1742</Hyperlink></Text>
                <ImageContainer className={isMobile ? "mobile" : undefined} id="hidden-vicky" src="/media/images/vicky.png" />
            </Section>
        </>
    )
}