import PropTypes from 'prop-types'
import { Element } from 'react-scroll'
import { RichText } from 'prismic-reactjs'

import { client } from '../prismic-configuration'

import { getCases } from '../utils'
import { NavBar, Intro, About, Cases, Services } from '../src/sections'
import { ScrollToTopButton, Preview } from '../src/components'
import { services, intro, navBar } from '../src/scheme'

export const getStaticProps = async (context) => {
  const introSection = await client.getSingle('intro_section', { ref: context?.previewData?.ref })
  const allCases = getCases()

  return {
    props: {
      preview: context.preview ? context.preview : null,
      introSection,
      allCases
    }
  }
}

export default function Home ({ preview, introSection, allCases }) {
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
      {preview && <Preview /> }
    </>
  )
}

Home.propTypes = {
  preview: PropTypes.bool,
  introSection: PropTypes.object,
  allCases: PropTypes.arrayOf(PropTypes.object)
}

Home.defaultProps = {
  preview: false,
  introSection: {},
  allCases: []
}
