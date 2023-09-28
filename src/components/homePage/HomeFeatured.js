import React, { useState, useEffect } from "react"

//Framer Motion
import { motion, useAnimation } from "framer-motion"
// Styled Components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeFeaturedSection,
  FeaturedVideo,
  FeaturedContent,
  FeaturedProjects,
} from "../../styles/homeStyles"
// Scroll Animations
import { useInView } from "react-intersection-observer"

// //video
 import featured from '../../assets/video/Anime.mp4'

const HomeFeatured = ({ onCursor}) => {
    const [hovered,setHovered] =useState(false)

    const animation = useAnimation();
    const [featuredRef,inView] = useInView({
        triggerOnce:true,
        rootMargin:'-300px'
    })

    useEffect(()=>{
        if(inView){
            animation.start('visible')
        }
    },[animation,inView])

  return (
    <HomeFeaturedSection 
        ref={featuredRef}
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
        <a href="/">
          <FeaturedContent
                onHoverStart={()=>setHovered(!hovered)}
                onHoverEnd ={()=>setHovered(!hovered)}
                onMouseEnter={()=>onCursor("hovered")} 
                onMouseLeave={onCursor}
            >
            <Flex spaceBetween>
              <h3>Featured Anime</h3>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: 'linear' }}
                className="meta"
              >
                <h4>Anime world</h4>
                <h4>2023</h4>
              </motion.div>
            </Flex>
            <h2 className="featured-title">
              NOT <br /> CARTOON
              <span className="arrow">
                <motion.svg
                  animate ={{x:hovered ? 48 :0}}
                  transition={{duration:0.6,ease:'linear'}}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
          <video loop autoPlay muted>
            <source src={featured}/>
        </video>
          </FeaturedVideo>
        </a>
      </Container>
      <Container>
        <FeaturedProjects>
          <Flex flexEnd>
            <button >
              <span>All Anime</span>
            </button>
          </Flex>
        </FeaturedProjects>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured



