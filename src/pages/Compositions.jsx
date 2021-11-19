import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
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
  width: 100%;
  height: fit-contents;
  padding: 150px 10% 100px 10%;
`

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: auto;
  width: 100%;
`

const Compositions = () => {
  return (
    <>
      <Header />
      <Body>
        <MainTitle>Compositions</MainTitle>
        <Gallery>
          <div>
            <CompositionPreview title="Prelude Pensive (2021)"
              img={PreludePensive}
              alt="Serene lake with mountains and shrubs."
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            />
            <CompositionPreview title="Jacaranda Snow (2019)"
              img={JacarandaSnow}
              alt="Jacaranda Snow book cover illustration."
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            />
            <CompositionPreview title="Radiant Southern Cross (2017)"
              img={SouthernCross}
              alt="ACSMF 2017 logo."
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            />
            <CompositionPreview title="Violin Concerto in A Major (2016)"
              img={Concerto}
              alt="Violin scroll on top of manuscript paper."
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            />
          </div>
          <div>
            <CompositionPreview title="Breaking the Asymptote (2020)"
              img={BreakingTheAsymptote}
              alt="Breaking the Asymptote 2021 concert coverpage."
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            />
            <CompositionPreview title="Concertino for Disintegrating Cello (2018)"
              img={DisintegratingCello}
              alt="Close-up, grayscale photo of cello."
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            />
            <CompositionPreview title="Hunter and the Lynx (2016)"
              img={Lynx}
              alt="Close-up of a lynx's eye."
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            />
            <CompositionPreview title="Beyond the Clouds (2015)"
              img={Fanfare}
              alt="Artology fanfare competition logo."
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            />
          </div>
        </Gallery>
      </Body>
      

      <Footer />
    </>
  );
}

export default Compositions;