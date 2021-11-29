import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { useNavigate } from 'react-router';
import CompositionPreview from '../components/CompositionPreview';
import BreakingTheAsymptote from '../assets/BreakingTheAsymptote.png'
import JacarandaSnow from '../assets/JacarandaSnow.jpeg'
import PreludePensive from '../assets/PreludePensive.jpeg'
import DisintegratingCello from '../assets/DisintegratingCello.jpg'
import SouthernCross from '../assets/SouthernCross.jpeg'
import Lynx from '../assets/Lynx.jpg'
import Concerto from '../assets/Concerto.jpeg'
import Fanfare from '../assets/Fanfare.jpg'
import { MainTitle } from '../components/PageTitles'
import Comp from '../assets/Compositions'


const Body = styled.div`
  & {
    width: 100%;
    height: fit-contents;
    padding: 150px 10% 100px 10%;
  }

  & h1 {
    text-align: center;
    margin: 20px 0px;
  }

  @media (max-width: 450px) {
    padding: 150px 5% 100px 5%
  }
`

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1000px;
  margin: auto;
  width: 100%;
`

const Row = styled.div`
  & {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 1000px) {
    & {
      flex-direction: column;
      align-items: center;
      width: 100%;
      background-color: pink;
    }
  }
`

const Compositions = () => {
  let navigate = useNavigate()
  const [toCompositionPage, setToCompositionPage] = React.useState(undefined)

  if (toCompositionPage !== undefined) {
    navigate(`${toCompositionPage}`)
  }

  return (
    <>
      <Header />
      <Body>
        <MainTitle>Compositions</MainTitle>
        <Gallery>
          <Row>
            <CompositionPreview data={Comp.prelude}
              img={PreludePensive}
              alt="Serene lake with mountains and shrubs."
              onClick={() => setToCompositionPage('prelude')}
            />
            <CompositionPreview data={Comp.asymptote}
              img={BreakingTheAsymptote}
              alt="Breaking the Asymptote 2021 concert coverpage."
              onClick={() => setToCompositionPage('asymptote')}
            />
          </Row>
          <Row>
            <CompositionPreview data={Comp.jacaranda}
              img={JacarandaSnow}
              alt="Jacaranda Snow book cover illustration."
              onClick={() => setToCompositionPage('jacaranda')}
            />
            <CompositionPreview data={Comp.disintegrating}
              img={DisintegratingCello}
              instrumentation="Piano quintet"
              onClick={() => setToCompositionPage('disintegrating')}
            />
          </Row>
          <Row>
            <CompositionPreview data={Comp.southernCross}
              img={SouthernCross}
              alt="ACSMF 2017 logo."
              onClick={() => setToCompositionPage('southernCross')}
            />
            <CompositionPreview data={Comp.lynx}
              img={Lynx}
              alt="Close-up of a lynx's eye."
              onClick={() => setToCompositionPage('lynx')}
            />
          </Row>
          <Row>
            <CompositionPreview data={Comp.concerto}
              img={Concerto}
              alt="Violin scroll on top of manuscript paper."
              onClick={() => setToCompositionPage('concerto')}
            />
            <CompositionPreview data={Comp.clouds}
              img={Fanfare}
              alt="Artology fanfare competition logo."
              onClick={() => setToCompositionPage('clouds')}
            />
          </Row>
        </Gallery>
      </Body>
      <Footer />
    </>
  );
}

export default Compositions;