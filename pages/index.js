import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Element } from 'react-scroll'
import { RichText } from 'prismic-reactjs'

import { client } from '../prismic-configuration'

import { getCases } from '../utils'
import { getGroupedData } from '../src/utils'
import { NavBar, Intro, About, Cases, Services } from '../src/sections'
import { ScrollToTopButton, Preview } from '../src/components'
import { services, navBar } from '../src/scheme'

export const getStaticProps = async (context) => {
  const introSection = await client.getSingle('intro_section', { ref: context?.previewData?.ref })
  const aboutSection = await client.getSingle('about', { ref: context?.previewData?.ref })
  const allCases = getCases()

  return {
    props: {
      preview: context.preview ?? null,
      introSection,
      aboutSection,
      allCases
    }
  }
}

export default function Home ({ preview, introSection, aboutSection, allCases }) {
  const carouselItems = introSection?.data?.carousel && useMemo(() => getGroupedData(introSection.data.carousel[0]), [introSection.data.carousel[0]])

  return (
    <>
      <NavBar barItems={navBar}/>
      <Intro
        title={RichText.asText(introSection.data.title)}
        carouselItems={carouselItems}
      />
      <Element name="About">
        <About
          title={RichText.asText(aboutSection.data.title)}
          subTitle={RichText.asText(aboutSection.data.subtitle)}
          description={RichText.asText(aboutSection.data.description)}
          image={aboutSection.data.image}
        />
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
  aboutSection: PropTypes.object,
  allCases: PropTypes.arrayOf(PropTypes.object)
}

Home.defaultProps = {
  preview: false,
  introSection: {},
  aboutSection: {},
  allCases: []
}
