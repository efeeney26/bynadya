import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Element } from 'react-scroll'
import Typical from 'react-typical'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import { getCases } from '../utils'
import { NavBar, Intro, About, Cases, Services } from '../src/sections'
import { ScrollToTopButton, Layout } from '../src/components'
import { services, intro, navBar } from '../src/scheme'

export const getStaticProps = async () => {
  const allCases = getCases()

  return {
    props: {
      allCases
    }
  }
}

const steps = [
  'Поздравляю тебя с твоим днем! Ты - мой ангел, я тобой бесконечно дорожу и безмерно тебя люблю. Я многому у тебя учусь',
  500
]

export default function Home ({ allCases }) {
  const [showPreview, setShowPreview] = useState(true)

  const handleClick = useCallback(() => {
    setShowPreview(false)
  }, [])

  return (
    showPreview
      ? <Layout>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          p={2}
        >
          <Typical
            steps={['Моя дорогая Надюша!', 1000]}
            wrapper="h1"
          />
          <Typical
            steps={steps}
            wrapper="h4"
          />
          <Button
            size="large"
            variant="contained"
            onClick={handleClick}
          >
          Показать подарок
          </Button>
        </Box>
      </Layout>
      : <>
        <NavBar barItems={navBar}/>
        <Intro carouselItems={intro}/>
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
  allCases: PropTypes.arrayOf(PropTypes.object)
}

Home.defaultProps = {
  allCases: []
}
