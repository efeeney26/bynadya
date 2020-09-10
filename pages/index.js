import PropTypes from 'prop-types'
import { Element } from 'react-scroll'

import { getCases } from '../utils'
import { NavBar, Intro, About, Cases } from '../src/sections'
import { ScrollToTopButton } from '../src/components'

export const getStaticProps = async () => {
  const allCases = getCases()

  return {
    props: {
      allCases
    }
  }
}

export default function Home ({ allCases }) {
  return (
    <>
      <NavBar />
      <Intro />
      <Element name="About">
        <About />
      </Element>
      <Element name="Cases">
        <Cases cases={allCases}/>
      </Element>
      <ScrollToTopButton />
    </>
  )
}

Home.propTypes = {
  allCases: PropTypes.arrayOf(PropTypes.object)
}

Home.defaultProps = {
  allCases: []
}
