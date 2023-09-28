import React from 'react'
import { Container, Flex } from '../../styles/globalStyles';
import { HomeAboutSection,About,Services,AccordionContent,AccordionHeader,AccordionIcon } from '../../styles/homeStyles';
import { useState,useEffect } from 'react';
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useGlobalStateContext } from '../../context/globalContext';


// Accordion Data
const accordionIds = [
    {
      id: 0,
      title: "Zoro.tv",
      results: [
        "Naruto",
        "one piece",
        "Bleach",
        "Attack on Titan",
        "One punch man",
        "Dragon Ball",
        "Death Note",
        "Hunter x Hunter",
        "Baki",
      ],
    },
    {
      id: 1,
      title: "Netflix",
      results: [
        "One piece",
        "Vinland saga",
        "Demon slayer",
        "Jujutsu Kaisen",
        "Chainsaw Man",
      ],
    },
    {
      id: 2,
      title: "AniWatch.to",
      results: [
        "Death Note",
        "Fullmetal Alchemist",
        "Naruto",
        "Attack on Titan",
        "Dragon Ball Z",
        "Bleach",
        "Cowboy Bebop",
        "My Hero Academia",
        "One-Punch Man",
        "Yu-Gi-Oh!Duel Monster",
      ],
    },
    {
      id: 3,
      title: "Crunchyroll",
      results: [
        "Jujutu Kaisen",
        "Black Clover",
        "Dr.Stone",
        "Parasyte",
        "Haikyuu!!",
      ],
    },
  ]

const HomeAbout = ({onCursor}) => {
    const animation = useAnimation();
    const [aboutRef,inView] = useInView({
        triggerOnce:true,
        rootMargin:'-300px'
    })
    useEffect(()=>{
        if(inView){
            animation.start('visible')
        }
    },[animation,inView])
    const [expanded,setExpanded] = useState(0)

  return (
    <HomeAboutSection 
        ref={aboutRef}
        animate={animation}
        initial='hidden'
        variants={{
            visible:{
                opacity:1,
                y:0,
                transition:{
                    duration:0.6,
                    ease:'linear'
                }
            },
            hidden:{
                opacity:0,
                y:72
            }
        }}
    >
        <Container>
            <Flex alignTop>
                <About>
                    <h2>
                        Anime.Dev is an integrated, full-service creative Website offering
              Anime Content, Daily updates, and Free Services with user friendly.
                      </h2>
                        <p>
                        Anime is a Japanese animation style that is produced or influenced by it. 
                        It is the Japanese term for cartoon or animation where the Japanese use the word to describe 
                        all cartoons irrespective of the nation. However, outside Japan, anime denotes animation movies 
                        that come exclusively from Japan, distinguished by blazing graphics, energetic characters, and attractive
                         themes such as sci-fi, romance, and supernatural forces. 
                        </p>
                </About>
                <Services>
                    <h3>Services</h3>
                    {accordionIds.map((details,index)=>(
                        <Accordion 
                            key={index} 
                            details={details} 
                            expanded={expanded} 
                            setExpanded={setExpanded}
                            onCursor={onCursor}
                        />
                    ))}
                </Services>
            </Flex>
        </Container>
    </HomeAboutSection>
  )

}

const Accordion = ({ details, expanded, setExpanded, onCursor }) => {
    const isOpen = details.id === expanded
    const [hovered, setHovered] = useState(false)
    const { currentTheme } = useGlobalStateContext()
    return (
      <>
        <AccordionHeader
          initial={false}
          onClick={() => setExpanded(isOpen ? false : details.id)}
          whileHover={{
            color:currentTheme === "dark" ? "#ffffff" : "#000000",
          }}
          onHoverStart={() => setHovered(!hovered)}
          onHoverEnd={() => setHovered(!hovered)}
          onMouseEnter={() => onCursor("hovered")}
          onMouseLeave={onCursor}
        >
          <AccordionIcon>
            <motion.span
              animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
              transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
            ></motion.span>
            <motion.span
              animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
              transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
            ></motion.span>
          </AccordionIcon>
          {details.title}
        </AccordionHeader>
        <AccordionContent
          key="content"
          animate={{ height: isOpen ? "100%" : "0" }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          {details.results.map((result, index) => (
            <span key={index}>{result}</span>
          ))}
        </AccordionContent>
      </>
    )
  }



export default HomeAbout;