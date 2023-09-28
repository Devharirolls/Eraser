import React,{useEffect} from 'react'

//scroll Behavior
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


import { Container } from '../../styles/globalStyles';
import {HomeContentSection,Content} from '../../styles/homeStyles'

const HomeContent = () => {
    const animation = useAnimation();
    const [contentRef,inView] = useInView({
        triggerOnce:true,
        rootMargin:'-300px'
    })

    useEffect(()=>{
        if(inView){
            animation.start('visible')
        }
    },[animation,inView])

  return (
    <HomeContentSection 
        ref={contentRef}
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
            <Content>
                Great stories don't just happen- <br/>
                they need to be uncovered. And we know BigThree to discover the Great
                stories that makes to escape from reality.That realize the truth of 
                the living world.
            </Content>
        </Container>
    </HomeContentSection>
  )
}

export default HomeContent;