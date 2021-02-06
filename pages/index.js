import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Element } from 'react-scroll'
import Prismic from 'prismic-javascript'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'

import { client } from '../prismic-configuration'

import { getGroupedData } from '../src/utils'
import { NavBar, Intro, About, Cases, Services } from '../src/sections'
import { ScrollToTopButton, PreviewLink, Background } from '../src/components'
import { navBar } from '../src/scheme'

export const getStaticProps = async (context) => {
    const [introSection, aboutSection, services, cases] = await Promise.all([
        client.getSingle('intro_section', { ref: context?.previewData?.ref }),
        client.getSingle('about', { ref: context?.previewData?.ref }),
        client.query(Prismic.Predicates.at('document.type', 'service'), { ref: context?.previewData?.ref }),
        client.query(Prismic.Predicates.at('document.type', 'case'), { ref: context?.previewData?.ref })
    ])

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

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(0, 2)
    }
}))

export default function Home ({ preview, introSection, aboutSection, services, cases }) {
    const carouselItems = useMemo(() => getGroupedData(introSection?.data?.carousel), [introSection.data.carousel])
    const classes = useStyles()

    return (
        <Container
            maxWidth={false}
            disableGutters
            className={classes.container}
    >
            <Background />
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
                <Cases cases={cases.results}/>
            </Element>
            <Element name="Services">
                <Services services={services.results}/>
            </Element>
            <ScrollToTopButton/>
            {preview && <PreviewLink/>}
        </Container>
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
