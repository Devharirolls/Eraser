import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import { Container,Flex } from '../styles/globalStyles';
import { Nav,NavFooter,CloseNav,NavHeader,NavList,NavVideos } from '../styles/navigationStyles';
import { useState } from 'react';
import { FooterContent,FooterSocial} from '../styles/footerStyles';
//Icons
import {Instagram,Facebook,Github} from "../assets/svg/social-icons"

const navRoutes = [
    {
      id: 0,
      title: "Bleach",
      path: "/Bleach",
      video: "bleach-bankaicutter.mp4",
    },
    {
      id: 1,
      title: "Naruto-Uzumaki",
      path: "/Naruto",
      video: "naruocutter.mp4",
    },
    {
      id: 2,
      title: "Monkey.D.Luffy",
      path: "/luffy",
      video: "monkeyDcutter.mp4",
    },
    {
      id: 3,
      title: "Goku-Ultra-instinct",
      path: "/goku-ultra",
      video: "GokuUltracutter.mp4",
    },
    {
      id: 4,
      title: "DemonSlayer",
      path: "/deomonslayer",
      video: "DemonSlayer.mp4",
    },
  ]


const Navigation = ({toggleMenu,setToggleMenu,onCursor}) => {
    const [revealVideo,setRevealVideo] = useState({
        show:false,
        video:'bleach-bankaicutter.mp4',
        key:"0"
    })


    const importVideo = async (videoFileName) => {
        try {
          const { default: video } = await import(`../assets/video/${videoFileName}`);
          return video;
        } catch (error) {
          console.error(`Failed to import video ${videoFileName}:`, error);
          return null;
        }
};

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
            <Nav 
              initial={{x:'-100%'}} 
              exit={{x:'-100%'}} 
              animate={{x:toggleMenu ? 0 : '-100%'}}
              transition={{
                duration:0.8,
                ease:'linear'
              }}
            >
              <Container>
                  <NavHeader>
                      <Flex spaceBetween noHeight>
                          <h2>Anime</h2>
                          <CloseNav 
                            onClick={()=>setToggleMenu(!toggleMenu)} 
                            onMouseEnter={()=>onCursor('pointer')} 
                            onMouseLeave={onCursor}
                            >
                              <button>
                                  <span></span>
                                  <span></span>
                              </button>
                          </CloseNav>
                      </Flex>
                  </NavHeader>
                  <NavList>
                      <ul>
                        {navRoutes.map(route => (
                          <motion.li
                            onMouseEnter={()=>onCursor('pointer')} 
                            onMouseLeave={onCursor}
                            key={route.id}
                            onHoverStart={async () =>{
                              const video = await importVideo(route.video);
                              setRevealVideo({
                                  show: true,
                                  video,
                                  key: route.id,
                                })
                              }
                            }
                              
                            onHoverEnd={() =>
                              setRevealVideo({
                                show: false,
                                video:null,
                                key: route.id,
                              })
                            }
                          >
                            <a href={`/projects${route.path}`}>
                              <motion.div
                                initial={{ x: -108 }}
                                className="link"
                                whileHover={{
                                  x: -40,
                                  transition: {
                                    duration: 0.4,
                                    ease: 'linear',
                                  },
                                }}
                              >
                                <span className="arrow">
                                  <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 101 57"
                                  >
                                    <path
                                      d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                      fill="#000"
                                      fillRule="evenodd"
                                    ></path>
                                  </motion.svg>
                                </span>
                                {route.title}
                              </motion.div>
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </NavList>
                  <NavFooter>
                      <Flex spaceBetween>
                      <FooterContent>
                    <p>jhdev@hari.com</p>
                </FooterContent>
                <FooterContent wider>
                    <p> 777 JH-Company DeveloperCity</p>
                </FooterContent>
                <FooterContent>
                    <p>	&copy; JH-dev 2023</p>
                </FooterContent>
                <FooterSocial>
                    <a onMouseEnter={()=>onCursor('hovered')} onMouseLeave={onCursor} href="/">
                        <Instagram/>
                    </a>
                    <a onMouseEnter={()=>onCursor('hovered')} onMouseLeave={onCursor} href="/">
                        <Facebook/>
                    </a>
                    <a onMouseEnter={()=>onCursor('hovered')} onMouseLeave={onCursor} href="/">
                        <Github/>
                    </a>
                </FooterSocial>
                      </Flex>
                  </NavFooter>
                  <NavVideos>
                      <motion.div 
                          animate={{width:revealVideo.show ? 0 : '100%'}} 
                          className="reveal">
                          </motion.div>
                          <div className="video">
                            <AnimatePresence initial={false} mode='wait'>
                            {revealVideo.video && (
                              <motion.video
                              key={revealVideo.key}
                              initial={{opacity:0}}
                              exit={{opacity:0}}
                              animate={{opacity:1}}
                              transition={{
                                  duration:0.2,
                                  ease:'easeInOut'
                              }}
                              loop autoPlay muted>
                              <source src={revealVideo.video}/>
                          </motion.video>
                            )}
                            </AnimatePresence>
                          </div>
                  </NavVideos>
              </Container>
              </Nav>
        )}
      </AnimatePresence>
    
    </>
  )
}

export default Navigation;