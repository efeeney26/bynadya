import { Element } from 'react-scroll'

import { NavBar, Intro, About, Cases } from '../src/sections'
import { ScrollToTopButton } from '../src/components'

export default function Home () {
  return (
    <>
      <NavBar />
      <Intro />
      <Element name="About">
        <About />
      </Element>
      <Element name="Cases">
        <Cases />
      </Element>
      <ScrollToTopButton />
    </>
  )
}
