import { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Element } from 'react-scroll'
import Typical from 'react-typical'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Fade from '@material-ui/core/Fade'
import Typography from '@material-ui/core/Typography'

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

const congratulation =
  'Ты - мой ангел, я тобой бесконечно дорожу и безмерно тебя люблю. ' +
  'Я благодарен тебе за то, что ты даришь мне свой свет, заботу и нежность. Эти качества в тебе бесценны. ' +
  'Я благодарен тебе за то, что ты каждый день ищешь и открываешь что-то новое в себе, в людях, в обычных вещах и делишься этими открытиями со мной. ' +
  'Меня восхищает твое желание к саморазвитию и желанию жить по-настоящему и быть настоящей. ' +
  'Ты направляешь меня, ты заряжаешь меня, с тобой, я чувствую, что все, что я делаю, кому-то нужно, ведь в конечном счете, почти все, что я делаю - я делаю ради тебя. ' +
  'Ничего не бойся, смело смотри вперед, я буду рядом, крепко держа тебя за руку.'

export default function Home ({ allCases }) {
  const [showPreview, setShowPreview] = useState(true)
  const [showTitle, setShowTitle] = useState(false)
  const [showCongratulation, setShowCongratulation] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setShowTitle(true)
    }, 2000)
    return () => clearInterval(titleInterval)
  }, [setShowTitle])

  useEffect(() => {
    const congratulationInterval = setInterval(() => {
      setShowCongratulation(true)
    }, 4000)
    return () => clearInterval(congratulationInterval)
  }, [setShowCongratulation])

  useEffect(() => {
    const buttonInterval = setInterval(() => {
      setShowButton(true)
    }, 14000)
    return () => clearInterval(buttonInterval)
  }, [setShowButton])

  const handleClick = useCallback(() => {
    setShowPreview(false)
  }, [setShowPreview])

  return (
    showPreview
      ? <Layout>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          minHeight="100vh"
          p={4}
          bgcolor="info.main"
          color="info.contrastText"
        >
          <Box
            textAlign="center"
          >
            <Typical
              steps={['Моя дорогая Надя!', 300]}
              wrapper="h1"
            />
            {showTitle &&
            <Typical
              steps={['Поздравляю тебя с твоим днем!', 300]}
              wrapper="h3"
            />
            }
            <Fade in={showCongratulation}>
              <Typography
                variant="body1"
              >
                {congratulation}
              </Typography>
            </Fade>
          </Box>
          {showButton &&
          <Button
            size="large"
            variant="contained"
            onClick={handleClick}
          >
            Show
          </Button>
          }
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
