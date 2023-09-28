import React from 'react'
import { Container, Flex } from '../styles/globalStyles'
import {FooterContent,FooterNav,FooterSocial} from '../styles/footerStyles'

//Icons
import {Instagram,Facebook,Github} from "../assets/svg/social-icons"

const Footer = ({onCursor}) => {
  return (
    <FooterNav>
        <Container>
            <Flex spaceBetween>
                <FooterContent>
                    <p>9876543210</p>
                    <p>jhdev@hari.com</p>
                </FooterContent>
                <FooterContent wider>
                    <p> 777 JH-Company DeveloperCity</p>
                    <p> Chennai ,TamilNadu</p>
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
        </Container>
    </FooterNav>
  )
}

export default Footer