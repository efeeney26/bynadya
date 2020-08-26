import Head from 'next/head'
import { Element } from 'react-scroll'

import utilsStyles from '../styles/utils.module.css'
import { Header, Intro, About, Cases } from '../sections'

export default function Home () {
  return (
    <>
      <Head>
        <title>ByNadya</title>
      </Head>
      <Header theme={utilsStyles.header} />
      <Intro theme={utilsStyles.intro} />
      <Element name="about">
        <About />
      </Element>
      <Element name="cases">
        <Cases />
      </Element>
    </>
  )
}
