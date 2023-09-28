import React from "react"
import Layout from "../components/layout"

//components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"

//context
import { useGlobalDispatchContext,useGlobalStateContext } from "../context/globalContext"
import HomeFeatured from "../components/homePage/HomeFeatured"
import HomeAbout from "../components/homePage/HomeAbout"

const IndexPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()


  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return <Layout>
      <HomeBanner onCursor={onCursor}/>
      <HomeContent />
      <HomeFeatured onCursor={onCursor}/>
      <HomeAbout onCursor={onCursor}/>
  </Layout>
}

export default IndexPage
