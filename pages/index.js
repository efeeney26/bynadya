import Head from 'next/head'
import { Intro, About } from '../sections'

export default function Home () {
  return (
    <>
      <Head>
        <title>ByNadya</title>
      </Head>
      <Intro />
      <About />
    </>
  )
}
