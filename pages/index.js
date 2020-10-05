import PropTypes from 'prop-types'
import { Element } from 'react-scroll'
import { RichText } from 'prismic-reactjs'

import { client } from '../prismic-configuration'

import { getCases } from '../utils'
import { NavBar, Intro, About, Cases, Services } from '../src/sections'
import { ScrollToTopButton } from '../src/components'
import { services, intro, navBar } from '../src/scheme'

export const getStaticProps = async () => {
  const introSection = await client.getSingle('intro_section', {})
  const allCases = getCases()

  return {
    props: {
      introSection,
      allCases
    }
  }
}

export default function Home ({ introSection, allCases }) {
  return (
    <>
      <NavBar barItems={navBar}/>
      <Intro
        title={RichText.asText(introSection.data.title)}
        carouselItems={intro}
      />
      <Element name="About">
        <About/>
      </Element>
      <Element name="Cases">
        <Cases cases={allCases}/>
      </Element>
      <Element name="Services">
        <Services services={services}/>
      </Element>
      <ScrollToTopButton/>
    </>
  )
}

Home.propTypes = {
  introSection: PropTypes.object,
  allCases: PropTypes.arrayOf(PropTypes.object)
}

Home.defaultProps = {
  introSection: {},
  allCases: []
}
