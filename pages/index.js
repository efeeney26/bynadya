import { Element } from 'react-scroll'

import { NavBar, Intro, About } from '../src/sections'
import { ScrollToTopButton } from '../src/components'

export default function Home () {
  return (
    <>
      <NavBar />
      <Intro />
      <Element name="About">
        <About />
      </Element>
      <ScrollToTopButton />
    </>
  )
}
