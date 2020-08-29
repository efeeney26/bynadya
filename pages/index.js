import { Element } from 'react-scroll'

import utilsStyles from '../styles/utils.module.css'
import { Header, Intro, About, Cases } from '../src/sections'

export default function Home () {
  return (
    <>
      <Header />
      <Intro />
      <About />
    </>
  )
}
