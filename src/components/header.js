import React,{useEffect,useRef} from 'react'
// import { Link } from 'gatsby';

//styled components

import { HeaderNav,Logo,Menu } from '../styles/headerStyles';
import { Container,Flex } from '../styles/globalStyles';
//context
import { useGlobalStateContext,useGlobalDispatchContext } from '../context/globalContext';

//custom hook
import useElementPosition from '../context/useElementPosition';

const Header = ({onCursor,setToggleMenu,ToggleMenu,hamburgerPosition,setHamburgerPosition}) => {
    const dispatch = useGlobalDispatchContext()
    const {currentTheme} = useGlobalStateContext()
    const hamburger = useRef(null)
    const position = useElementPosition(hamburger)

    const toggleTheme =()=>{
        if(currentTheme === 'dark'){
            dispatch({type:'TOGGLE_THEME',theme:"light"})
        }else{
            dispatch({type:'TOGGLE_THEME',theme:"dark"})
        }
    }

    const menuHover = () =>{
        onCursor('locked')
        setHamburgerPosition({x:position.x , y:position.y + 72})
    }

    useEffect(()=>{
        window.localStorage.setItem("theme",currentTheme)
    },[currentTheme])

  return (
    <HeaderNav
        animate={{y:0,opacity:1}}
        initial={{y:-72,opacity:0}}
        transition={{duration:1,ease:'linear'}}
    >
        <Container >
            {console.log(currentTheme)}
            <Flex spaceBetween noHeight>
                <Logo
                    onMouseEnter={()=>onCursor('hovered')}
                    onMouseLeave={onCursor}
                >
                    <a href='/'>ANIME</a>
                    <span 
                        onClick={toggleTheme}
                        onMouseEnter={()=>onCursor('pointer')}
                        onMouseLeave={onCursor}
                    ></span>
                    <a href='/'>DEV</a>
                </Logo>
                <Menu ref={hamburger} onClick={()=>setToggleMenu(!ToggleMenu)} onMouseEnter={menuHover} onMouseLeave={onCursor}>
                    <button>
                        <span></span>
                        <span></span>
                    </button>
                </Menu>
            </Flex>
        </Container>
    </HeaderNav>
  )
}

export default Header;