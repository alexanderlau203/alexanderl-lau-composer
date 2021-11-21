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
import Fanfare from '../assets/Fanfare.png'
import { MainTitle } from '../components/PageTitles';

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
`

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: auto;
  width: 100%;
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
          <div>
            <CompositionPreview title="Prelude: Pensive (2021)"
              img={PreludePensive}
              instrumentation="Solo piano"
              alt="Serene lake with mountains and shrubs."
              description="A short, simple but pensive prelude written for solo piano."
              onClick={() => setToCompositionPage('prelude')}
            />
            <CompositionPreview title="Jacaranda Snow (2019)"
              img={JacarandaSnow}
              instrumentation="Piano trio (2 violins)"
              alt="Jacaranda Snow book cover illustration."
              description="A short work written to accompany the growth mindset picture book, written by Catherine Greer and illustrated by Helen Magisson. The musical narrative follows the storyline in the book. When it snows in the mountains, Jess longs to go. But there's no extra money for a holiday this year. So Jess finds a way to see the most amazing snow of all..."
            />
            <CompositionPreview title="Radiant Southern Cross (2017)"
              img={SouthernCross}
              instrumentation="Antiphonal brass &#38; percussion"
              alt="ACSMF 2017 logo."
              description="The winning fanfare written for the 2017 ACSMF fanfare competition. Written for antiphonal brass to play in the galleries of the Great Hall."
            />
            <CompositionPreview title="Violin Concerto in A Major (2016)"
              img={Concerto}
              instrumentation="Solo violin and orchestra"
              alt="Violin scroll on top of manuscript paper."
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            />
          </div>
          <div>
            <CompositionPreview title="Breaking the Asymptote (2020)"
              img={BreakingTheAsymptote}
              instrumentation="Semi-chamber orchestra"
              alt="Breaking the Asymptote 2021 concert coverpage."
              description="A fast-paced and high-energy work originally composed for chamber orchestra and also arranged for piano quartet (2 violins). The asymptote is a mathmatical concept, where a line approaches another and gets infinitely close but never touches..."
            />
            <CompositionPreview title="Concertino for Disintegrating Cello (2018)"
              img={DisintegratingCello}
              instrumentation="Piano quintet"
              alt="Close-up, grayscale photo of cello."
              description="Primal and violent, the concertino was written for a cello that is (optionally) physically destroyed throughout the piece. Debued by Luke Poier at Sydney Grammar School, John Vallance Hall."
            />
            <CompositionPreview title="Hunter and the Lynx (2016)"
              img={Lynx}
              instrumentation="Piano quintet"
              alt="Close-up of a lynx's eye."
              description="A fast-paced and energetic work written for piano quintet. Loosely progamatic, the piece follows the deathly chase of the endangered lynx by a ruthless hunter."
            />
            <CompositionPreview title="Beyond the Clouds (2015)"
              img={Fanfare}
              instrumentation="Classical orchestra"
              alt="Artology fanfare competition logo."
              description="One of the selected fanfares in the 2015 Artology Fanfare Competition. Written for Classical orchestra and drawing from the symphonic energy of large-scale Romantic symphonies and overtures."
            />
          </div>
        </Gallery>
      </Body>
      

      <Footer />
    </>
  );
}

export default Compositions;