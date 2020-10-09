import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Element } from 'react-scroll'
import Prismic from 'prismic-javascript'

import { client } from '../prismic-configuration'

import { getGroupedData } from '../src/utils'
import { NavBar, Intro, About, Cases, Services } from '../src/sections'
import { ScrollToTopButton, Preview } from '../src/components'
import { navBar } from '../src/scheme'

export const getStaticProps = async (context) => {
  const introSection = await client.getSingle('intro_section', { ref: context?.previewData?.ref })
  const aboutSection = await client.getSingle('about', { ref: context?.previewData?.ref })
  const services = await client.query(Prismic.Predicates.at('document.type', 'service'), { ref: context?.previewData?.ref })
  const cases = await client.query(Prismic.Predicates.at('document.type', 'case'), { ref: context?.previewData?.ref })

  return {
    props: {
      preview: context.preview ?? null,
      introSection,
      aboutSection,
      services,
      cases
    }
  }
}

export default function Home ({ preview, introSection, aboutSection, services, cases }) {
  const carouselItems = useMemo(() => getGroupedData(introSection?.data?.carousel), [introSection.data.carousel])

  return (
    <>
      <NavBar barItems={navBar}/>
      <Intro
        title={introSection.data.title}
        carouselItems={carouselItems}
      />
      <Element name="About">
        <About
          title={aboutSection.data.title}
          subTitle={aboutSection.data.subtitle}
          description={aboutSection.data.description}
          image={aboutSection.data.image}
        />
      </Element>
      <Element name="Cases">
        <Cases cases={cases.results} />
      </Element>
      <Element name="Services">
        <Services services={services.results} />
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
  services: PropTypes.object,
  cases: PropTypes.object
}

Home.defaultProps = {
  preview: false,
  introSection: {},
  aboutSection: {},
  services: {},
  cases: {}
}
